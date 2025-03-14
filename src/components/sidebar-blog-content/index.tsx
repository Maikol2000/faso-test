import Link from "next/link";
import { FC } from "react";
import TrialSectionOne from "../side-bar-search-blog/trial-section-one";
import TrialSectionTwo from "../side-bar-search-blog/trial-section-two";

interface SideBarBLogContentProps {}

const SideBarBLogContent: FC<SideBarBLogContentProps> = () => {
  return (
    <div className="lg:w-1/3">
      <div className="sticky top-4">
        <div className="px-4 py-3">
          <h2 className="text-xl font-bold">Nội Dung Bài Viết</h2>
        </div>

        <div className="p-4">
          <ol className="space-y-4 text-gray-700">
            <li>
              <Link
                href="#part-1"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                1. Quy trình 5S là gì?
              </Link>
            </li>
            <li>
              <Link href="#part-2" className="hover:text-green-700">
                2. Lợi ích quy trình 5S đem lại
              </Link>
            </li>
            <li>
              <Link href="#part-3" className="hover:text-green-700">
                3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
              </Link>
              <ol className="pl-5 mt-2 space-y-2">
                <li>
                  <Link
                    href="#part-3-1"
                    className="hover:text-green-700 text-sm"
                  >
                    3.1 Cải thiện rõ nét môi trường làm việc
                  </Link>
                </li>
                <li>
                  <Link
                    href="#part-3-2"
                    className="hover:text-green-700 text-sm"
                  >
                    3.2 Tiết kiệm thời gian đáng kể
                  </Link>
                </li>
                <li>
                  <Link
                    href="#part-3-3"
                    className="hover:text-green-700 text-sm"
                  >
                    3.3 Tăng năng suất làm việc
                  </Link>
                </li>
                <li>
                  <Link
                    href="#part-3-4"
                    className="hover:text-green-700 text-sm"
                  >
                    3.4 Tiết kiệm chi phí
                  </Link>
                </li>
                <li>
                  <Link
                    href="#part-3-5"
                    className="hover:text-green-700 text-sm"
                  >
                    3.5 Tăng chất lượng sản phẩm
                  </Link>
                </li>
              </ol>
            </li>
            <li>
              <Link href="#part-4" className="hover:text-green-700">
                4. Quy trình 5S gồm các bước:
              </Link>
              <ol className="pl-5 mt-2 space-y-2">
                <li>
                  <Link
                    href="#part-4-1"
                    className="hover:text-green-700 text-sm"
                  >
                    4.1 Seiri (Ngăn nắp)
                  </Link>
                </li>
                <li>
                  <Link
                    href="#part-4-2"
                    className="hover:text-green-700 text-sm"
                  >
                    4.2 Seiton (Sắp xếp)
                  </Link>
                </li>
                <li>
                  <Link
                    href="#part-4-3"
                    className="hover:text-green-700 text-sm"
                  >
                    4.3 Seiso (Vệ sinh)
                  </Link>
                </li>
                <li>
                  <Link
                    href="#part-4-4"
                    className="hover:text-green-700 text-sm"
                  >
                    4.4 Seiketsu (Tiêu chuẩn hóa)
                  </Link>
                </li>
                <li>
                  <Link
                    href="#part-4-5"
                    className="hover:text-green-700 text-sm"
                  >
                    4.5 Shitsuke (Kỷ luật)
                  </Link>
                </li>
              </ol>
            </li>
            <li>
              <Link href="#part-5" className="hover:text-green-700">
                5. Quy trình được thực hiện như sau:
              </Link>
              <ol className="pl-5 mt-2 space-y-2">
                <li>
                  <Link
                    href="#part-5-1"
                    className="hover:text-green-700 text-sm"
                  >
                    5.1 Giai đoạn chuẩn bị
                  </Link>
                </li>
                <li>
                  <Link
                    href="#part-5-2"
                    className="hover:text-green-700 text-sm"
                  >
                    5.2 Triển khai rộng rãi
                  </Link>
                </li>
                <li>
                  <Link
                    href="#part-5-3"
                    className="hover:text-green-700 text-sm"
                  >
                    5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
                  </Link>
                </li>
                <li>
                  <Link
                    href="#part-5-4"
                    className="hover:text-green-700 text-sm"
                  >
                    5.4 Sàng lọc, sắp xếp và đánh giá
                  </Link>
                </li>
                <li>
                  <Link
                    href="#part-5-5"
                    className="hover:text-green-700 text-sm"
                  >
                    5.5 Đánh giá
                  </Link>
                </li>
              </ol>
            </li>
            <li>
              <Link href="#part-6" className="hover:text-green-700">
                6. Quy trình 5S có giống với Kaizen?
              </Link>
            </li>
            <li>
              <Link href="#part-7" className="hover:text-green-700">
                7. Đối tượng nào nên áp dụng 5S?
              </Link>
            </li>
            <li>
              <Link href="#part-8" className="hover:text-green-700">
                8. Các yếu tố tạo nên thành công cho quy trình 5S
              </Link>
            </li>
          </ol>
        </div>
        <div className="space-y-6">
          <TrialSectionOne />
          <TrialSectionTwo />
        </div>
      </div>
    </div>
  );
};

export default SideBarBLogContent;
