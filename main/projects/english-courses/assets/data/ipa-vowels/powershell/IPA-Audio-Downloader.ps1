# IPA-Audio-Downloader.ps1

# Tạo thư mục download
$downloadDir = "$env:USERPROFILE\Downloads\IPA-Audio"
if (!(Test-Path $downloadDir)) {
    New-Item -ItemType Directory -Path $downloadDir | Out-Null
}

# Base URL
$baseUrl = "https://media.merriam-webster.com/audio/prons/en/us/mp3"

# Danh sách từ
$words = @(
    "information","analysis","development","approach","environment","policy","evidence","research","issue","economy","role","strategy","benefit","factor","source","method","area","income","community","individual","structure","function","process","issue","authority","impact","policy","context","region","trend","concept","sector","labour","resources","procedure","principle","period","response","commission","aspect","credit","culture","design","element","investment","maintenance","normal","outcome","pattern","percent","policy","priority","promotion","range","region","regulation","requirement","role","section","security","strategy","structure","technology","theory","tradition","transition","trend","variable","version","welfare","access","accommodation","adjustment","agreement","aid","alternative","aspect","assembly","assessment","assistance","assumption","attempt","attitude","background","benefit","capacity","category","circumstance","comment","commission","community","complaint","component","concept","conclusion","conduct","conflict","consequence","construction","contribution"
)

foreach ($word in $words) {
    $firstLetter = $word.Substring(0,1).ToLower()
    $success = $false

    $number = "1"  # Bắt đầu
    $lastTriedUrl = ""

    for ($i = 0; $i -le 10; $i++) {
        $fileName = "$word$number.mp3"
        $url = "$baseUrl/$firstLetter/$fileName"
        $outputFile = "$downloadDir\$word.mp3"

        Write-Host "Trying: $fileName ..."
        try {
            Invoke-WebRequest -Uri $url -OutFile $outputFile -ErrorAction Stop
            Write-Host "✅ Success: saved as $word.mp3" -ForegroundColor Green
            $success = $true
            break
        } catch {
            Write-Host "❌ Failed: $fileName" -ForegroundColor Yellow
            $lastTriedUrl = $url
            $number = "0" + $number
        }
    }

    if (-not $success) {
        Write-Host "🚫 Could not download any valid file for: $word" -ForegroundColor Red
        # Tạo file .metadata
        $metaFile = "$downloadDir\$word.metadata"
        $metaContent = @"
Word: $word
LastTriedUrl: $lastTriedUrl
Status: Failed to download
"@
        $metaContent | Out-File -Encoding UTF8 $metaFile
        Write-Host "🗂️ Metadata saved: $metaFile" -ForegroundColor Cyan
    }
}

Write-Host "`n✅ Done! Files saved to: $downloadDir" -ForegroundColor Green
Read-Host -Prompt "Press Enter to exit"
