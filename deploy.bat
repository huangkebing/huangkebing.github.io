rmdir /s /q assets
rmdir /s /q blogs
rmdir /s /q categories
rmdir /s /q images
rmdir /s /q tag
rmdir /s /q timeline
del 404.html
del avatar.png
del favicon.ico
del index.html

xcopy ..\blog\public\* .\ /s /e /i /c /h /r /y

git add .
set /p message=commit message:
git commit -m %message%
git push origin master