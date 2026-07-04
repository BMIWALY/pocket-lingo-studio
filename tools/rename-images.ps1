$targetFolder = "..\public\images\introduction"
$listFile = ".\rename-list.txt"

# อ่านรายชื่อไฟล์ใหม่
$names = Get-Content $listFile | Where-Object { $_.Trim() -ne "" }

# อ่านไฟล์รูปทั้งหมด
$files = Get-ChildItem $targetFolder -File |
Where-Object {
    $_.Extension -in ".png", ".jpg", ".jpeg", ".webp"
}

# ถ้าชื่อไฟล์เป็นตัวเลข เช่น 1.png 2.png 10.png
if (($files | Where-Object { $_.BaseName -match '^\d+$' }).Count -eq $files.Count) {

    $files = $files | Sort-Object {
        [int]$_.BaseName
    }

}
else {

    # ถ้าไม่ใช่ตัวเลข ให้เรียงตามเวลาแก้ไข
    $files = $files | Sort-Object LastWriteTime

}

# ตรวจสอบจำนวน
if ($files.Count -ne $names.Count) {

    Write-Host ""
    Write-Host "ERROR : Number of images does not match rename-list.txt" -ForegroundColor Red
    Write-Host "Images : $($files.Count)"
    Write-Host "Names  : $($names.Count)"
    Write-Host ""

    exit

}

Write-Host ""

for ($i = 0; $i -lt $names.Count; $i++) {

    $extension = $files[$i].Extension
    $newName = $names[$i] + $extension

    Rename-Item -Path $files[$i].FullName -NewName $newName

    Write-Host "$($files[$i].Name) -> $newName"

}

Write-Host ""
Write-Host "Rename complete!" -ForegroundColor Green
Write-Host ""