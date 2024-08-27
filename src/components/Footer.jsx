import React from "react";
import Section from "./Section";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Column 1 */}
          <div className="lg:w-1/3">
            <div className="col-inner">
              <div className="img has-hover x md-x lg-x y md-y lg-y">
                <div className="img-inner dark">
                  <img
                    src="https://phaluongtravel.com/wp-content/uploads/2024/07/logo-1400x455.png"
                    alt=""
                    className="w-4/6 h-auto"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <p className="uppercase">Công ty cổ phần du lịch Pha Luông</p>
                <p>MSDN: 5500466020</p>
                <p>Đường Hoa Ban, tiểu khu 3/2, TTNT Mộc Châu, huyện Mộc Châu, tỉnh Sơn La.</p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="lg:w-1/3">
            <div className="col-inner">
              <ul className="space-y-2">
                <li><strong><a href="#" className="text-blue-500 hover:underline">Trang chủ</a></strong></li>
                <li><a href="https://phaluongtravel.com/blog/" className="text-blue-500 hover:underline"><strong>Tin tức Du lịch Mộc Châu</strong></a></li>
                <li><a href="https://phaluongtravel.com/gioi-thieu/" className="text-blue-500 hover:underline"><strong>Giới thiệu</strong></a></li>
                <li><strong><a href="https://phaluongtravel.com/thac-dai-yem-cau-kinh-tinh-yeu/" className="text-blue-500 hover:underline">Thác Dải Yếm - Cầu kính Tình Yêu</a></strong></li>
                <li><a href="https://phaluongtravel.com/phim-truong-pho-di-bo-moc-chau/" className="text-blue-500 hover:underline"><strong>Phim trường - Phố đi bộ Mộc Châu</strong></a></li>
                <li><a href="https://phaluongtravel.com/the-nordic-village-moc-chau/" className="text-blue-500 hover:underline"><strong>The Nordic Village Mộc Châu</strong></a></li>
                <li><a href="https://phaluongtravel.com/mua-ve/" className="text-blue-500 hover:underline"><strong>Mua vé tham quan</strong></a></li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="lg:w-1/3">
            <div className="col-inner">
              <h3 className="text-xl font-bold">LIÊN HỆ</h3>
              <div className="info-com mt-2">
                <div className="row-info"><b>ĐỊA ĐIỂM:</b> Đường Hoa Ban, Tiểu khu 3/2, TTNT Mộc Châu</div>
                <div className="row-info"><b>EMAIL:</b> phaluongtravelmc@gmail.com</div>
                <div className="row-info"><b>HOTLINE:</b> 0396.806.666</div>
              </div>
              <div className="flex gap-3 mt-4">
                <a href="https://www.facebook.com/PhaluongMcSl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-n-7 rounded-full">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="mailto:phaluongtravelmc@gmail.com" className="w-10 h-10 flex items-center justify-center bg-n-7 rounded-full">
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a href="tel:0396.806.666" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-n-7 rounded-full">
                  <i className="fa-solid fa-phone"></i>
                </a>
                <a href="https://www.youtube.com/@mocchaumoc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-n-7 rounded-full">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
