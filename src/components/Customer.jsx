// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/element/css/autoplay'
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { listCust } from '../redux/action/awardsAction';
import { useEffect } from 'react';
import styles from '../style';

const Customers = () => {
    const dispatch = useDispatch();
    const { getListCust } = useSelector(
        (state) => state.AwardsReducer
    );

    useEffect(() => {
        dispatch(listCust());
    }, [dispatch])

    return (
        <div className={`customers ${styles.flexCenter}  mx-auto ${styles.paddingX}`}>
            <Swiper
                spaceBetween={50}
                slidesPerView={8}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation

            >
                {getListCust ? getListCust?.map((item, key) => {
                    return (
                        <div class=" w-full bg-[#555] sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 flex flex-col  ">
                            {item.content ? (
                                <>
                                    <SwiperSlide>                      
                                     <img src={item._embedded['wp:featuredmedia'][0].source_url} alt="Image" />
                                    </SwiperSlide>
                                </>) : ''}
                        </div>
                    )
                }) : ''}


            </Swiper>
        </div>
    )
}

export default Customers;
