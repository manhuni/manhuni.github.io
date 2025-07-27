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
"see","tree","green","key","these","week","need","teacher","easy","agreement","bit","ship","milk","fish","gym","window","kick","visit","ticket","listen","bed","head","ten","get","pen","bread","next","yes","men","said","cat","black","man","hand","map","hat","back","sad","bag","bad","cup","sun","fun","run","bus","luck","jump","mud","shut","cut","car","star","farm","hard","start","part","park","heart","dark","father","hot","dog","shop","clock","lot","box","cotton","rock","top","pot","call","law","door","short","walk","talk","floor","more","war","chalk","book","foot","look","good","could","should","push","pull","wood","hook","school","food","blue","true","group","rule","move","juice","tool","fool","learn","word","nurse","girl","first","turn","burn","hurt","bird","third","about","ago","sofa","banana","teacher","sugar","camera","mother","doctor","better","name","rain","say","day","cake","wait","train","eight","great","paint","time","high","my","tie","fly","ride","light","night","try","cry","boy","coin","toy","enjoy","join","voice","noise","boil","spoil","point","now","out","about","down","house","loud","mouth","shout","cloud","town","go","boat","snow","home","hope","road","stone","show","nose","close","go","home","show","know","no","hope","close","stone","road","snow","ear","beer","here","near","fear","idea","career","appear","clear","cheer","air","care","bear","share","dare","pair","stairs","fair","square","hair","tour","sure","cure","pure","secure","endure","mature","insure","obscure","reassure","pen","apple","paper","people","computer","open","happy","problem","price","party","bat","rabbit","baby","blue","about","job","climb","big","number","cab","top","better","stopped","time","ticket","party","city","table","ten","hotel","dog","add","played","food","road","bed","hard","cold","child","sand","cat","kick","school","cake","car","clock","king","clean","quiet","question","go","bigger","ghost","game","girl","green","glass","again","begin","garden","fish","phone","laugh","fun","full","find","photo","forest","gift","tough","van","love","very","voice","have","never","live","move","give","drive","think","bath","math","thank","both","earth","teeth","month","north","health","this","that","they","them","then","there","those","mother","father","other","see","pass","city","scene","small","sun","science","simple","ice","music","zoo","fizz","rose","zero","music","busy","has","was","is","news","ship","she","shower","nation","issue","special","education","machine","social","official","vision","measure","leisure","treasure","genre","usual","casual","decision","occasion","collision","hat","home","happy","hope","have","hear","hill","honey","hello","hospital","chat","cheap","chicken","choose","catch","match","watch","rich","teacher","kitchen","jam","job","jungle","giant","general","edge","bridge","judge","age","page","man","mother","milk","movie","moment","make","move","team","summer","comma","no","name","night","never","nice","dinner","new","open","nine","number","sing","song","king","ring","long","strong","young","wing","thing","thank","love","long","little","bell","feel","light","look","leave","list","play","red","run","right","read","carry","write","road","rain","rich","ready","we","white","water","why","wait","window","world","win","wish","walk","yes","yellow","yesterday","young","universe","use","unit","usual","yoga","youth"
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
