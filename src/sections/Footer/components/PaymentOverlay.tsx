export const PaymentOverlay = () => {
  return (
    <div className="caret-transparent hidden outline-[3px] no-underline">
      <div className="bg-black caret-transparent h-full opacity-30 outline-[3px] absolute no-underline w-full z-[99] left-0 top-0"></div>
      <div className="caret-transparent outline-[3px] fixed no-underline z-[100] top-2/4 inset-x-0">
        <div className="bg-white caret-transparent outline-[3px] text-center no-underline w-[586px] mx-auto py-[67px]">
          <h3 className="caret-transparent text-gray-600 text-[32px] font-bold outline-[3px] no-underline">
            현재 결제가 진행중입니다.
          </h3>
          <p className="caret-transparent text-gray-500 text-[15px] leading-[26px] outline-[3px] no-underline mt-2 mb-9">
            본 결제 창은 결제완료 후 자동으로 닫히며,결제 진행 중에 본 결제 창을
            닫으시면
            <br className="caret-transparent outline-[3px] no-underline" />
            주문이 되지 않으니 결제 완료 될 때 까지 닫지 마시기 바랍니다.
          </p>
          <div className="caret-transparent outline-[3px] no-underline">
            <img
              src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/img_loading.gif"
              alt="loading"
              className="box-border caret-transparent inline max-w-full outline-[3px] no-underline align-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
