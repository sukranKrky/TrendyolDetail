import React from 'react'
import 'stayle.scss'
import { FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'

import { IoPricetagSharp } from 'react-icons/io5'
import { VscInfo } from 'react-icons/vsc'

import { MdStore, MdChatBubble } from 'react-icons/md'

import Slider from 'react-slick'
const ProductDetal = () => {
  return (
    <div className="container flex ">
      <div className="product-container flex  mx-auto bg-[#fff] ">
        <div className="galeri w-[400px]">
          <div className="product-image">
            <div className="gallery">
              <FaChevronLeft className="left absolute " />
              <FaChevronRight className="right absolute  " />
            </div>
            <div className="cargo-free absolute mt-4 ml-4">KARGO BEDAVA</div>
            <div>
              <img
                className="img "
                src="https://cdn.dsmcdn.com/mnresize/1200/1800/ty290/product/media/images/20220105/14/22164185/258759791/1/1_org_zoom.jpg"
              />
            </div>
          </div>
          <img
            className="img2"
            src="https://cdn.dsmcdn.com//seller-ads/editor/resources/seller-selection-stamp-v14.png"
          />
          <div className="product-slider flex ">
            <img
              className="img-min min-w-[40px] w-10 h-[60px] mr-4 rounded-md hover:border-[1px] border-orange-600  "
              src="https://cdn.dsmcdn.com/mnresize/128/192/ty290/product/media/images/20220105/14/22164185/258759791/1/1_org_zoom.jpg"
            />
            <img
              className="img-min min-w-[40px] w-10 h-[60px] mr-4 rounded-md hover:border-[1px] border-orange-600"
              src="https://cdn.dsmcdn.com/mnresize/128/192/ty290/product/media/images/20220105/14/22164185/258759791/2/2_org_zoom.jpg"
            />
            <img
              className="img-min min-w-[40px] w-10 h-[60px] mr-4 rounded-md hover:border-[1px] border-orange-600"
              src="https://cdn.dsmcdn.com/mnresize/128/192/ty290/product/media/images/20220105/14/22164185/258759791/3/3_org_zoom.jpg"
            />
          </div>
        </div>
        <div className="right-content flex-none bg-white ">
          <div className="pr-in-w  h-[200px] flex-row   ">
            <div>
              <div className="pr-in-cn">
                <div>
                  <h1 className="inline mb-[2px] font-[20px]">JANES </h1>
                  <span className="text-[#333] font-[20px]">
                    Çizgi Desenli Kruvaze Yaka Midiboy Triko Elbise 100 Cm.
                    SN-b1ca68086c47e82ca241
                  </span>
                </div>
                <div className="merchent-box">
                  <span className=" text-[#666] ">Satıcı :</span>
                  <a href="#" className="text-[#4d8ee1]">
                    Viyamo
                  </a>
                </div>
                <div className="flex flex-row items-center mt-[10px] mb-5">
                  <div className="flex inline-block h-[17px] mr-2  relative">
                    <BsStarFill className="text-[#ffc000]" />
                    <BsStarFill className="text-[#ffc000]" />
                    <BsStarFill className="text-[#ffc000]" />
                    <BsStarFill className=" text-[#ffc000]" />
                    <BsStarFill className="text-[#d8d8d8]" />
                  </div>

                  <div className="flex">
                    <a
                      href="#"
                      className="ml-2 text-[#666] text-[14px] cursor-pointer hover:underline hover:text-orange-600 "
                    >
                      465 Değerlendirme
                    </a>
                    <img
                      className="w-[19px] h-4 mt-1 ml-1"
                      src="https://cdn.dsmcdn.com/mobile/reviewrating/kamera-emoji6x.png"
                    />

                    <div class="separator text-[#979797] h-5"></div>
                    <a
                      href="#"
                      className="ml-2 text-[#666] text-[14px] cursor-pointer hover:underline hover:text-orange-600 "
                    >
                      574 Soru Cevap
                    </a>
                  </div>
                </div>
                <div className="product-price flex">
                  <div className=" h-6 flex">
                    <div className="pr-nm-dsc">
                      <div className="flex flex-col ">
                        <span className="line-through">207,39 TL</span>
                        <span className="">169,90 TL</span>
                      </div>
                    </div>
                    <div className="separator"></div>
                    <div className="pr-pr-dsc">
                      <div className="font-bold text-[#666] font-medium">
                        Sepette %10 indirim
                      </div>
                      <div>
                        <span className="spn font-bold">152,91 TL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom "></div>
          <div className="slicing-atributes block">
            <section className="mx-4 my-1">
              <div className="">
                <h2 class="font-bold">Renk</h2>
              </div>
            </section>
            <div class="sliderBese">
              <div className="flex mx-4 my-2">
                <img
                  className="img-min min-w-[40px] w-10 h-[60px] mr-4 rounded-md hover:border-[1px] border-orange-600  "
                  src="https://cdn.dsmcdn.com/mnresize/1200/1800/ty290/product/media/images/20220106/12/22594744/285443588/1/1_org_zoom.jpg"
                />
                <img
                  className="img-min min-w-[40px] w-10 h-[60px] mr-4 rounded-md hover:border-[1px] border-orange-600"
                  src="https://cdn.dsmcdn.com/mnresize/128/192/ty290/product/media/images/20220105/14/22164185/258759791/2/2_org_zoom.jpg"
                />
              </div>
            </div>
          </div>

          <div className="size ">
            <div className="size-title flex mx-4 my-1">
              <h2 class="font-bold">Beden :</h2>
              <span className="mx-1">S</span>
            </div>
            <div className="variants flex mx-4 my-1">
              <div className="sp-item">S</div>
              <div className="sp-item">M</div>
              <div className="sp-item">L</div>
              <div className="sp-item">XL</div>
              <div className="sp-item">2XL</div>
              <div className="sp-item">3XL</div>
            </div>
          </div>

          <div className="product-button-container flex">
            <button className="add-to-basket mx-4 my-1 ">
              <div className="add">Sepete Ekle</div>
              {/* <div className="add-success">Sepete Eklendi</div> */}
            </button>
            <div className="favorite-button mx-4 my-1">
              <div>
                <button className="fv ">
                  <IoMdHeartEmpty className="icon " />
                </button>
              </div>
            </div>
          </div>

          <div className="delivery-favorite-info flex-row">
            <div className="flex">
              <div className="pr-dd"></div>
              <div className="fv-dt ">
                <span className="font-bold font-bold ml-4">
                  Tahmini Kargo Teslimi :
                </span>
                <span className="spn">2 gün içerisinde</span>
              </div>
              <div className="fv-dt flex flex-row items-center text-[12px] text-[#999] ml-[250px] ">
                <IoMdHeartEmpty class="mr-2  text-sm " /> 21240 favori
              </div>
            </div>
          </div>
          <div className="border-bottom "></div>
          <div className="feaured-info mx-4 my-1">
            <div className="text-[14px text-[#333] font-bold   ">
              Öne Çıkan Bilgiler
            </div>
            <div className="conten-desciriptions">
              <ul className="ul text-[#333] text-[14px] max-h-[220px] ">
                <li className="li ml-3 ">
                  15 gün içinde ücretsiz iade. Detaylı bilgi için tıklayın.
                </li>
                <li className="li ml-3 ">
                  Bu ürün Viyamo tarafından gönderilecektir.
                </li>
                <li className="li ml-3 ">
                  Çizgi Desenli Kruvaze Yaka Midiboy Triko Elbise 100 Cm.
                  Modelin Ölçüleri: Boy:165, Kilo:55, Göğüs:90, Bel:72, Kalça:
                  100 Modelin üzerindeki ürün M/38 bedendir
                </li>
                <li className="li ml-3 ">
                  Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin
                  üzerindeki siparişleri Trendyol iptal etme hakkını saklı
                  tutar.
                </li>
                <li className="li ml-3 ">
                  Kampanya fiyatından satılmak üzere 100 adetten fazla stok
                  sunulmuştur.
                </li>
                <li className="li ml-3 ">
                  İncelemiş olduğunuz ürünün satış fiyatını satıcı
                  belirlemektedir.
                </li>
              </ul>
              <div className="all-features relative">
                <div className="opacity-layout"></div>
                <button className=" ">ÜRNÜN TÜM ÖZELLİKLERİ</button>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
      <div className="product-widget-list flex-none ">
        <section className="campaing">
          <h2 className="font-bold">ÜRÜNÜN KAMPANYALARI</h2>
          <div className="widget-row flex items-center font-bold">
            <IoPricetagSharp className="icon" />
            <a href="# " className="flex">
              60 TL ve Üzeri Kargo Bedava
            </a>

            <FaChevronLeft className="arrow" />
          </div>
          <div className="widget-bottom  flex items-center font-bold ">
            <IoPricetagSharp className="icon" />
            <a href="# " className="flex  ">
              2. Ürüne 15 TL İndirim
            </a>

            <FaChevronLeft className="arrow" />
          </div>
        </section>
        <section className="seller">
          <div className="widget-title flex items-center font-bold">
            <a href="# " className="flex">
              Viyamo
            </a>
            <label>8.9</label>
            <VscInfo className="icone" />
          </div>
          <div className="widget-row  flex items-center font-bold">
            <MdStore className="icon" />
            <div>
              <a href="#">Mğazayı Gör</a>
              <span>4.5B Takipçi</span>
            </div>

            <FaChevronLeft className="arrow" />
          </div>
          <div className="widget-bottom flex items-center font-bold">
            <MdChatBubble className="icon" />
            <a href="#">Ürün Soruları(644)</a>

            <FaChevronLeft className="arrow" />
          </div>
        </section>
        <section className="review">
          <h2 className="font-bold">ÖNE ÇIKAN YORUM</h2>
          <div className="widget-row flex  items-center">
            <p className=" text-[15px]">
              <div className="flex inline-block h-[27px] mr-2  relative float-left ">
                <BsStarFill className="text-[#ffc000]" />
                <BsStarFill className="text-[#ffc000]" />
                <BsStarFill className="text-[#ffc000]" />
                <BsStarFill className=" text-[#ffc000]" />
                <BsStarFill className="text-[#d8d8d8]" />
              </div>
              biraz üste oturan bı model ama yine de kendi bedeniniz alınabilir
              güzellll
            </p>

            <div className="mt-1">
              <span>
                Ş** A**
                <span>|</span>19 Aralık 2021
              </span>
              <span className="span2 flex mt-[10px]">
                <div className="icon flex font-bold items-center">
                  <FaCheckCircle className="icone" />
                  <span>Ürün satın alındı</span>
                </div>
              </span>
            </div>
          </div>
          <div className="widget-bottom  flex items-center">
            <a href="# " className=" ">
              DAHA FAZLA YORUM
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetal
