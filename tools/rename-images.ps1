$targetFolder = "..\public\images\greetings"
$listFile = ".\rename-list.txt"

$names = Get-Content $listFile | Where-Object { $_.Trim() -ne "" }
$files = Get-ChildItem $targetFolder -Filter *.png | Sort-Object LastWriteTime

if ($files.Count -ne $names.Count) {
    Write-Host "Number of images does not match number of filenames." -ForegroundColor Red
    Write-Host "Images : $($files.Count)"
    Write-Host "Names  : $($names.Count)"
    exit
}

for ($i = 0; $i -lt $names.Count; $i++) {
    $newName = $names[$i] + ".png"
    Rename-Item -Path $files[$i].FullName -NewName $newName
    Write-Host "$($files[$i].Name) -> $newName"
}

Write-Host "Rename complete!" -ForegroundColor Green