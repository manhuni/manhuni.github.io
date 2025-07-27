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
"agreement",
"assumption",
"background",
"component",
"labor",
"maintenance",
"procedure",
"requirement"
)

foreach ($word in $words) {
    $outputFile = "$downloadDir\$word.mp3"

    # Bỏ qua nếu file đã tồn tại
    if (Test-Path $outputFile) {
        Write-Host "Skipped (already exists): $word.mp3" -ForegroundColor Cyan
        continue
    }

    $firstLetter = $word.Substring(0,1).ToLower()
    $success = $false

    $number = "1"
    $lastTriedUrl = ""

    # --- Step 1: Try normal numbering ---
    for ($i = 0; $i -le 10; $i++) {
        $fileName = "$word$number.mp3"
        $url = "$baseUrl/$firstLetter/$fileName"

        Write-Host "Trying: $fileName ..."
        try {
            Invoke-WebRequest -Uri $url -OutFile $outputFile -ErrorAction Stop
            Write-Host "Success: saved as $word.mp3" -ForegroundColor Green
            $success = $true
            break
        } catch {
            Write-Host "Failed: $fileName" -ForegroundColor Yellow
            $lastTriedUrl = $url
            $number = "0" + $number
        }
    }

    # --- Step 2: 6-letter prefix + remaining count ---
    if (-not $success -and $word.Length -gt 6) {
        $prefix = $word.Substring(0, 6)
        $remainingCount = $word.Length - 6
        $suffixNumber = "{0:D2}" -f $remainingCount
        $specialFileName = "$prefix$suffixNumber.mp3"
        $specialUrl = "$baseUrl/$firstLetter/$specialFileName"

        Write-Host "Trying fallback format 1: $specialFileName ..."
        try {
            Invoke-WebRequest -Uri $specialUrl -OutFile $outputFile -ErrorAction Stop
            Write-Host "Success with fallback format 1: saved as $word.mp3" -ForegroundColor Green
            $success = $true
        } catch {
            Write-Host "Fallback format 1 failed: $specialFileName" -ForegroundColor Yellow
            $lastTriedUrl = $specialUrl
        }
    }

    # --- Step 3: prefix01 to prefix10 ---
    if (-not $success -and $word.Length -gt 6) {
        $prefix = $word.Substring(0, 6)
        for ($i = 1; $i -le 10; $i++) {
            $suffix = "{0:D2}" -f $i
            $fileName = "$prefix$suffix.mp3"
            $url = "$baseUrl/$firstLetter/$fileName"

            Write-Host "Trying fallback format 2: $fileName ..."
            try {
                Invoke-WebRequest -Uri $url -OutFile $outputFile -ErrorAction Stop
                Write-Host "Success with fallback format 2: saved as $word.mp3" -ForegroundColor Green
                $success = $true
                break
            } catch {
                Write-Host "Fallback format 2 failed: $fileName" -ForegroundColor Yellow
                $lastTriedUrl = $url
            }
        }
    }

    # --- Save metadata if all failed ---
    if (-not $success) {
        Write-Host "Could not download any valid file for: $word" -ForegroundColor Red
        $metaFile = "$downloadDir\$word.metadata"
        $metaContent = @"
Word: $word
LastTriedUrl: $lastTriedUrl
Status: Failed to download
"@
        $metaContent | Out-File -Encoding ASCII $metaFile
        Write-Host "Metadata saved: $metaFile" -ForegroundColor Cyan
    }
}

Write-Host "`nDone! Files saved to: $downloadDir" -ForegroundColor Green
Read-Host -Prompt "Press Enter to exit"
