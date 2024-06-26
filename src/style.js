const styles = {
  boxWidth: "xl:max-w-full w-full",

  heading3: "font-judul font-semibold xs:text-[38px] text-[30px] text-black xs:leading-[60.8px] leading-[50.8px] w-full ",
  heading2: "font-judul font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-p font-normal text-black  text-[14px] xl:text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexEnd: "flex justify-center items-end",

  paddingX: "sm:px-[180px] px-[50px]",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  sectionAbout: `text-justify`,
};

export default styles;
