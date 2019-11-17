---
layout: post
title: Cách mình đã thực hiện UAT khi làm việc
date: 2019-11-16 16:33:20 +0700
description: UAT (User Acceptance Testing) là gì? Cần làm gì khi UAT. # Add post description (optional)
img: uat.jpg # Add image post (optional)
fig-caption: UAT - User Acceptance Testing # Add figcaption (optional)
tags: [UAT, Hoang Phan, Kiểm thử chấp nhận, Testing, BA]
---
Bài blog này mình muốn chia sẻ rằng mình đã thực hiện UAT như thế nào ở công ty mình đã làm việc.

*  Auto generated table of contents
{:toc}

## 1. Giới thiệu
Ý tưởng bài viết này cũng xuất phát từ câu nói “UAT không phải là kêu BA tới rồi test trong vòng 2h là xong.” trong bài: [UAT (User Acceptance Testing)](https://www.linkedin.com/pulse/user-acceptance-testing-uat-nguyen-duong-hai/). Và vì mình cũng từng UAT với chỉ 2h là xong, do đó ngồi nhìn nhận lại những gì mình đã làm với UAT.

Qua bài của mình các bạn có thể biết được mình đã làm UAT ra sao, những cái gì mình đã làm được, những cái gì mình chưa làm được. Và các bạn có thể tự áp dụng vô chính bản thân và cho mình đôi lời nhận xét xem mình đã làm UAT đúng chưa nhé.

## 2. Khái niệm
>Theo như nhiều tài liệu mình đọc được thì UAT (User Acceptance Testing - Kiểm thử chấp nhận) là một loại kiểm thử được thực hiện để xác nhận rằng cái sản phẩm/tính năng mình làm ra có đáp ứng nhu cầu của người dùng hay không? Và nó được thực hiện trước khi sản phẩm được release.

![process in deverloping a product]({{site.baseurl}}/assets/img/uat/process-product.png)

## 3. Sai lầm của bản thân
Mình từng thực hiện UAT theo 1 khái niệm mà mình tự thấy là chính mình đã từng hiểu chưa tường tận. Đó là mình làm 1 cái checklist những tính năng cần phải đáp ứng từ những requirement và check nó trong vòng vài tiếng. Và nhận ra rằng mình đã thiếu sót trong việc thực hiện UAT.

![uat-checklist]({{site.baseurl}}/assets/img/uat/uat-checklist.png)

Sau vài lần làm như thế thì đọc được nhiều tài liệu hơn về UAT, cũng như được hướng dẫn thì mình áp dụng 1 số phương pháp khác, mà tự đó nhận ra được bầu trời của UAT.

## 4. Những điều mình đã làm với UAT

### 4.1 Khảo sát, phân tích và thảo luận về tính năng sẽ làm thật kỹ
Trước khi làm tính năng/dự án, mình, team lead/PM hay thường đặt ra vấn đề là tính năng này sẽ làm như thế nào, có cần thiết cho end-user hay không? 

Nếu câu trả là không? Thì hỏi lại khách hàng, cũng như trao đổi về sự cần thiết của tính năng với khách hàng để tránh lãng phí thời gian cũng như cost dự án.

Vậy đây mình nghĩ nó đã là bước đầu tiên của UAT rồi. Xác định nhu cầu của end-user về tính năng/dự án thật kỹ.

### 4.2 Verify theo checklist
Tự mình kiểm tra xem là sản phẩm làm ra đúng tính năng như khách hàng mong muốn từ ban đầu hay không, vì mình làm việc trực tiếp với khách hàng, lấy yêu cầu từ họ và từ đó phân tích đưa ra cái họ mong muốn, và với sự confirm the last requirement của khách hàng=> Mình cũng hiểu về sản phẩm và tự test lại sản phẩm theo checklist và coi đạt yêu cầu theo requirement để đưa cho khách hàng chưa? 
>Này theo mình được biết nó gọi là: [Contract Acceptance Testing](https://usersnap.com/blog/types-user-acceptance-tests-frameworks/)

Mình sẽ chỉ đi những flow đảm bảo luồng chính (primary testcase) mà mang lại benefit cho End-user vì mình khá tin tưởng team QC của mình làm khá tốt với những case theo tech hay doc, vì mình luôn review test case của QC dự án (dự án gần nhất mình làm) sau khi họ hoàn thành bộ test case.

### 4.3 Verify theo checklist
Gửi cho những member trong công ty để support test kiểu dùng như 1 end user và nhận feedback từ họ. Mình thấy 1 thiếu sót đó là không thể quan sát hết được họ đã sử dụng phần mềm như thế nào, có gặp trouble gì khi dùng sản phẩm/tính năng không? Nhưng mình tự nhận thực hiện UAT như thế nào cũng xem là chấp nhận được vì cũng lấy được feedback từ họ.

Vì mình biết có một số sản phẩm, tính năng trước khi được ra mắt thị trường thì họ sẽ mời end-user thật để tới văn phòng và cùng dùng sản phẩm. Kiểu như trong game Liên Minh Huyền Thoại, khi ra 1 tướng mới hoặc có chỉnh sửa, sẽ mời các game thủ tới chơi thử để đánh giá nhân vật trong game, quay video quan sát hành động của họ, từ đó phân tích ra là nhân vật đã ok chưa.

### 4.4 Gửi khách hàng verify bước cuối
Gửi cho khách hàng, và PM của mình share cho họ về tính năng được làm ra, nhưng không quá chi tiết. Sau đó họ sẽ dùng, và lấy feedback từ họ, xem có bug gì ở đó hay không? Vấn đề gì về tính năng, cũng như vấn đề UI/UX, nội dung của sản phẩm không? Từ đó team mình chỉnh sửa cho phù hợp.

### 4.5 Gửi bạn bè dùng thử

Thỉnh thoảng nếu project kiểu release rồi, nhưng mình vẫn muốn check lại để kiểm tra lại thực sự sản phẩm có tốt hay không? thì mình gửi cho bạn bè mình xem và đánh giá. Một điều đáng buồn là project hùi trước mình làm, luôn nhận kiểu than phiền là website truy cập load còn chậm. :(((( buồn quá buồn. Nhưng không sao, team vẫn đang cố gắng khắc phục vụ web chậm, phải làm từng bước để cho sản phầm ổn định dần chứ, bùm 1 cái đâu thể nói phát là web nhanh liền được đâu.

>Cách này mặc dù sản phẩm/tính năng đã golive rồi, nhưng mình vẫn nghĩ nó là 1 phần nhỏ trong UAT

### 4.6 Thực hiện A/B testing

Ngoài ra để đánh giá về việc sản phẩm/tính năng làm ra có thu hút của người dùng hay không thì mình có áp dụng A/B testing vào. Và đặt tracking lên web để xem hành vi người dùng, xem họ click vào đâu nhiều,... từ đó rút ra được kết luận từ sản phẩm/tính năng nào phù hợp hơn với người dùng. Nhưng hơi buồn vì mình rời dự án trước khi được rằng A/B testing được gắn xong chưa (do dev gắn), và xem được số liệu từ phân tích :(( buồn như con chuồn chuồn.

>Cách này cũng sau release sản phẩm, nhưng nó là cần thiết để xác định rằng sản phẩm có phù hợp với nhu cầu của end-user hoặc loại nào của tính năng thì phù hợp hơn. Như facebook vẫn thường thực hiện khi ra một tính năng mới.

## 5. Những điều mình chưa được thực hiện khi UAT

* Chưa có nhiều kinh nghiệm làm việc với End-User, chỉ làm việc với bên khách hàng. Và cũng chỉ là làm những cái liên quan đến phân tích gắn js để kiểm tra độ tương tác của User thôi. Chưa tổ chức được nhóm user để xem hành vi sử dụng sản phẩm như thế nào, hay quay video lại để xem họ sử dụng như thế nào. 
* Những loại thực hiện UAT khác mà mình chưa biết tới.

Mình chỉ mong là mình sẽ có cơ hội làm những task như thế này ở cty mới.

## 6. Kết luận
Mình thực hiện UAT không phải chỉ ở giai đoạn trước khi release sản phẩm, mà đã bắt đầu thực hiện nó khi feature được đưa ra để làm. Và cả sau khi sản phẩm được lên thớt. Và có thể trả lời được là BA/PO có phải là người thực hiện UAT hay không? hay còn những roles khác cùng thực hiện nữa.

>Hi vọng nhận feedback từ mọi người về bài viết cũng như kiến thức về UAT.
