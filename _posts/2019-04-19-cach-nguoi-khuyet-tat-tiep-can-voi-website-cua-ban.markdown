---
layout: post
title: Cách người khuyết tật tiếp cận với webiste của bạn – Phần 1
date: 2019-04-19 12:00:20 +0700
description: Hiểu về WCAG. Làm sao người khuyết tật tiếp cận được với trang web của bạn? # Add post description (optional)
img: wcag1.jpg # Add image post (optional)
fig-caption: Hiểu về WCAG # Add figcaption (optional)
tags: [access, accessibility, WCAG, Hoang Phan, Testing, BA]
---

## Giới thiệu
Thời gian vừa rồi mình có tìm hiểu cách để nội dung của một trang web có thể tiếp cận với các đối tượng người dùng khuyết tật như bị khiếm thị, khiếm thính, suy giảm vận động…

Và chuyên mục này mình sẽ chia sẻ những kiến thức mình đã tìm hiểu được, làm sao người khuyết tật tiếp cận được với sản phẩm của bạn, cách bạn đưa trang web tiếp cận với các đối tượng khuyết tật.

![process in deverloping a product]({{site.baseurl}}/assets/img/wcag1.jpg)
>Accessibility – Chôm từ google image 😀

**TỔNG CHUNG CHUYÊN MỤC NÀY MÌNH SẼ CÓ 3 PHẦN**

**+ Phần 1: Hiểu về WCAG**

**+ Phần 2: Cách người khuyết tật tiếp cận với website của bạn**

**+ Phần 3: Lộ trình đưa website đến với người khuyết tật**

# PHẦN 1: HIỂU VỀ WCAG
**Mục lục:**
*  Auto generated table of contents
{:toc}

## 1. WCAG là gì?
Để tìm hiểu về cách người khuyết tật tiếp cận với website, thì ta hãy tìm hiểu về bộ tiêu chuẩn WCAG để biết nó giúp gì cho việc tiếp cận nhé.

WCAG là một bộ tiêu chuẩn trong xây dựng website, được tổ chức W3C đưa ra nhằm xác định cách làm cho nội dung Web dễ tiếp cận hơn với người khuyết tật.

>Tài liệu chính gốc của WCAG tại đây nha: https://www.w3.org/TR/WCAG21/

## 2. 4 Nguyên tắc

Nó có 4 nguyên tắc chính đó là: perceivable, operable, understandable, và robust.

#### 1. Perceivable
Các thành phần thông tin và User Interface phải được trình bày sao cho người dùng không chỉ là đọc mà có thể thông qua các thiết bị khác, người khuyết tật có thể cảm nhận được nội dung của thông tin.

![Thiếu Alt text]({{site.baseurl}}/assets/img/wcag1/image-1.png)
>Khi một hình ảnh bị thiếu Alt text, thì các thiết bị/app reader screen không thể đọc được nội dung của hình ảnh. Người dùng (mù/khiếm thị) sẽ không biết hình ảnh này diễn tả về điều gì cả.

#### 2. Operable
Các thành phần về giao diện và navigation có thể hoạt động tốt. Web của bạn phải làm sao đó để thông qua các thiết bị như keyboard, nút ấn, … mà vẫn điều khiển được web của bạn 1 cách dễ dàng. Như cách thay đổi focus, cấu trúc của page, thời gian đọc và sử dụng nội dung, di chuyển từ module này sang module khác trên cùng 1 page mà người dùng có thể cảm nhận rằng họ đang ở vị trí đó của trang web của bạn.

![redirect page]({{site.baseurl}}/assets/img/wcag1/image-2.png)
>Các trang tự động redirect, thì nên có thời gian đủ để những người khuyết tật như mù lòa, thị lực kém, hạn chế về nhận thức có thể cần nhiều thời gian hơn để đọc nội dung. Do đó cần thiết kế lượng thời gian cho phù hợp.

#### 3. Understandable
Các thông tin và operation của UI phải dễ hiểu, thiên về nội dung của trang web phải dễ đọc, dễ hiểu, điều hướng nhất quán, dễ đoán được hướng của điều hướng, giúp tránh lỗi hoặc có lỗi với các thông báo lỗi rõ ràng, …

![tabindex]({{site.baseurl}}/assets/img/wcag1/image-3.gif)
>tabindex cần đặt sao cho phù hợp, nhất quán, dễ đoán để người dùng dễ điều hướng khi sử dụng các thiệt bị như Single-switch access device, bàn phím, …


#### 4. Robust
Các nội dung cung cấp phải đủ mạnh để diễn tả từng thành phần một cách đầy tin cậy đến với user agents và các công nghệ hỗ trợ. Thông qua parsing, cách đặt name, role, và value cho các thẻ html, cách truyền tải status message .

![robust]({{site.baseurl}}/assets/img/wcag1/image-4.png)
>Với 1 popup (div), để đóng popup này thì thông qua element “X”. aria-lable=”Close” được sử dụng để cung cấp một name cho các công nghệ hỗ trợ có thể truy cập vào nút “X”.

## 3. Đánh giá qua 3 cấp độ

Và WCAG nó đánh giá các tiêu chuẩn (gọi là tiêu chí thành công) dựa vào 3 cấp độ (A-AA-AAA). Vì các tiêu chí thành công được tổ chức dựa trên tác động của chúng đối với thiết kế, cấp độ càng cao, thiết kế càng trở nên gò bó.

* **Cấp độ A** – một số tác động đến thiết kế.
* **Cấp độ AA** – tác động trung bình đến thiết kế
* **Cấp độ AAA** – tác động cao đến thiết kế

Với 3 mức độ này, thì có thể cùng 1 thể loại tiêu chí, nhưng nó có 3 mức. Khi bạn vượt qua được cấp độ AA, nghĩa là cấp độ A của tiêu chí đã được đáp ứng. Và theo những tài liệu mình tìm hiểu được, thì khuyến nghị nên đạt đến level AA.

Để rõ hơn, thì xem thử ví dụ này nhé, trong Guideline 1.4 Distinguishable.

+ Tiêu chí thành công 1.4.1 – Use of Color – level A. Mục đích của Tiêu chí Thành công này là đảm bảo rằng tất cả người dùng có thể truy cập thông tin được truyền tải bởi sự khác biệt về màu sắc, nghĩa là bằng cách sử dụng màu sắc trong đó mỗi màu có một ý nghĩa được gán cho nó.

+ Tiêu chí thành công 1.4.3 – Contrast (Minimum) – level AA. Trình bày trực quan của văn bản và hình ảnh của văn bản có tỉ lệ tương phản ít nhất 4,5: 1

+ Tiêu chí thành công 1.4.6 – Contrast (Enhanced) – level AAA.
Trình bày trực quan văn bản và hình ảnh của văn bản có tỷ lệ tương phản ít nhất là 7: 1

![contrast A]({{site.baseurl}}/assets/img/wcag1/image-5.png)
>Hiện text #FFFFFF trên nền xanh #65A5BF chỉ đáp ứng là sự khác biệt về màu sắc, ratio =2,73 < 4.5. Do đó chỉ đáp ứng được tiêu chí thành công A (1.4.1)

![contrast A]({{site.baseurl}}/assets/img/wcag1/image-6.png)
>Để đạt được tiêu chí AA thì phải thay đổi nền xanh thành #00819F để đạt ratio 4.53 khi đó nó sẽ đáp ứng luôn cả tiêu chí thành công A (1.4.1)
Hoặc để đạt luôn tiêu chí AAA thì sẽ phải thay đổi nền xanh thành #006179 để ratio = 7.03.

Như ví dụ trên ta thấy chỉ đạt được level A, thì khi xem trang web này trên 1 device ở 1 môi trường quá sáng, thì có thể sẽ không đọc được chữ do tỉ lệ contrast quá thấp, hoặc những người bị khiếm thị hoặc thiên về bị bệnh về màu cũng khó mà đọc được những text #FFFFFF trên nền #65A6BF trong môi trường bình thường. Còn khi thay đổi đến level AAA sẽ ít còn bị các vấn đề về contrast, nhưng có thể thay đổi nguyên bộ thiết kế, cũng như bộ màu trên trang web.

Từ đó ta có thể thấy là level càng cao thì càng khó đáp ứng, và sẽ vượt qua được level cao hơn, thì level thấp sẽ được đáp ứng.

## 4. Vì sao áp dụng WCAG lại quan trọng?
+ Bình đẳng không gian mạng cho tất cả mọi người

+ Người khuyết tật dễ dàng sử dụng

+  Tạo ra sự khác biệt lớn cho người dùng của bạn và có thể giúp ngăn chặn các vấn đề hoàn toàn có thể tránh được.

+ Thu hút một lượng người đọc/tham gia khá lớn.

+ Giúp đáp ứng các nhu cầu và đảm bảo khách truy cập trang web có trải nghiệm tốt nhất có thể khi truy cập.

+ Ngoài ra còn tránh bị kiện nữa, đọc thử bài viết: [Các trang web không thể truy cập có thể bị kiện ở Mỹ](https://userway.org/blog/the-anatomy-of-a-web-accessibility-lawsuit){:target="_blank"}


## 5. Thông tin thêm
Khảo sát về người khuyết tật Canada báo cáo rằng hơn 80% người khuyết tật sử dụng ít nhất một thiết bị hỗ trợ. Do đó để các thiết bị hỗ trợ đọc được nội dung website của bạn, thì nên đảm bảo được các tiêu chí thành công của WCAG.

>**Cảm ơn bạn đã đọc hết phần này của mình, cùng đón xem 2 phần tiếp theo nhé.**

* **Phần 1**: [Hiểu về WCAG](#) (finished)
* **Phần 2**: Cách người khuyết tật tiếp cận với website của bạn (pending)
* **Phần 3**: Lộ trình đưa website đến với người khuyết tật (pending)

