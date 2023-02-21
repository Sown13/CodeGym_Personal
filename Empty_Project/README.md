Khởi tạo local repo
git init

Tham chiếu đến remote repo:
git remote add origin <URL>

kiểm tra đang git remote đến đâu:
git remote -v

Add tất cả:
git add .

Add theo tên file:
git add <file name>

Commit:
git commit -m "nội dung, ghi chú cho dễ hiểu"

Push:
git push origin <branch>
<branch> là tên của branch muốn push lên

Branch mặc định là master

Tạo branch mới bằng:
git checkout -b <Tên branch: viết liền, ko dấu, có thể dùng_>

Chuyển branch bằng cách:
git checkout <tên branch>

Clone branch: Mở thư mục muốn lưu file clone repo
bằng webstorm, mở terminal
git branch <URL>
