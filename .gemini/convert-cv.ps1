$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open("c:\Users\hecin\portfolio\CV_Missoum_Hadi_Adda.docx")
$doc.SaveAs([ref]"c:\Users\hecin\portfolio\public\cv.pdf", [ref]17)
$doc.Close()
$word.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
Write-Host "CV converted to PDF successfully"
