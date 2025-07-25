# IPA-Audio-Downloader.ps1

# Tạo thư mục download
$downloadDir = "$env:USERPROFILE\Downloads\IPA-Audio"
if (!(Test-Path $downloadDir)) {
    New-Item -ItemType Directory -Path $downloadDir | Out-Null
}

# Base URL
$baseUrl = "https://media.merriam-webster.com/audio/prons/en/us/mp3"

# Danh sách từ
$words = @("seat","see","tea","tree","sheep","beach","peace","leave","green","machine","sit","bit","hit","fit","lid","milk","ship","fish","this","pick","bed","pen","red","men","ten","head","said","send","get","yes","cat","bat","man","back","hat","bag","dad","map","sand","land","cup","cut","bus","luck","mud","sun","fun","run","hut","gun","about","sofa","banana","teacher","mother","doctor","sister","brother","paper","color","bird","learn","girl","turn","her","work","serve","term","nurse","early","car","start","father","heart","calm","park","part","dark","hard","laugh","lot","cot","hot","dog","not","box","pot","rock","shop","god","law","call","saw","draw","thought","more","door","floor","four","short","good","put","foot","book","look","could","should","wood","wolf","pull","food","moon","school","blue","soon","room","truth","zoo","group","boot","say","day","way","play","take","make","name","late","rain","train","my","I","eye","time","like","high","find","night","right","side","boy","toy","joy","join","point","voice","choice","oil","boil","spoilt","now","how","out","about","down","house","around","mouth","shout","brown","go","no","so","know","home","show","hope","road","open","stone","here","near","fear","ear","appear","clear","idea","year","career","serious","hair","care","pair","fair","share","bear","swear","air","stare","dare","tour","sure","pure","secure","cure","endure","obscure","insure","mature","allure","pin","pen","pet","pack","pop","push","pipe","pick","peep","paper","bin","bat","bad","big","bed","bug","bus","buy","beach","book","two","top","tip","tap","ten","tug","team","tall","table","time","do","day","dog","dad","dip","dot","dead","deal","deep","dark","cat","key","kick","cup","cook","cold","coat","corn","clap","cream","go","get","give","good","girl","game","gum","gate","gold","green","chip","cheese","chair","check","chop","child","church","choice","cheap","chain","jam","job","joke","joy","judge","jeans","giant","general","giraffe","juice","fun","fan","fish","fine","foot","face","fire","farm","fight","fast","van","voice","visit","very","vase","vote","village","victory","view","vehicle","think","thin","thank","theatre","thirty","thumb","thick","thought","thorn","thousand","this","that","those","these","there","their","they","though","either","breathe","see","sun","sit","song","say","soup","salt","sale","season","safe","zoo","zero","zone","crazy","lazy","music","nose","buzz","prize","rose","she","shop","shoe","shut","shy","cash","dish","fish","wish","trash","vision","measure","leisure","treasure","genre","mirage","beige","usual","casual","visionary","hat","house","hope","help","hello","happy","hill","hair","heart","heat","man","mother","make","money","milk","morning","music","name","some","home","now","name","new","nine","near","night","note","none","next","number","sing","ring","king","long","song","bring","thing","wing","strong","wrong","leg","love","look","life","little","like","long","low","learn","land","red","read","rain","road","right","room","run","river","race","reach","yes","you","yellow","young","yard","year","yesterday","yogurt","yawn","youth","we","want","way","work","water","world","window","wind","win","warm")

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
