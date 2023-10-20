rmdir /s /q 2023
rmdir /s /q 2024
rmdir /s /q 2025
rmdir /s /q archives
rmdir /s /q assets
rmdir /s /q categories
rmdir /s /q css
rmdir /s /q fancybox
rmdir /s /q fontawesome
rmdir /s /q fonts
rmdir /s /q images
rmdir /s /q js
rmdir /s /q lib
rmdir /s /q page
rmdir /s /q tags
rmdir /s /q webfonts
del 404.html
del search.xml
del index.html

xcopy ..\new_blog\public\* .\ /s /e /i /c /h /r /y

git add .
set /p message=commit message:
git commit -m %message%
git push origin master