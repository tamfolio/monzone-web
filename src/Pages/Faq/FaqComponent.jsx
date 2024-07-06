import React from "react";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "How much is a Monzone POS Terminal?",
      content: `A Monzone POS Terminal costs N30,000.00`,
    },
    {
      title: "Can I access my savings before the maturity date?",
      content:
        "You can't break your Vault Savings before maturity, but you can access your Target Savings.",
    },
    {
      title: "How can I reach the support team?",
      content: `You can reach the support team by sending an email to hello@monzonecredit.com `,
    },
    {
      title: "Can I get an ATM card for my Monzone account?",
      content: `Not at the moment, but it's coming soon!`,
    },
    {
        title: "Is the invoice product free?",
        content: `Yes, our invoice product is free.`,
      },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "#0a0a0a",
  rowContentColor: '#535353',
  // arrowColor: "red",
   rowContentPaddingTop: '10px',
   rowContentPaddingBottom: '10px',
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

function FaqComponent() {
  return (
    <div className="bg-white py-[100px] flex items-start justify-center gap-[140px] px-[122px]">
      <div className="w-[300px]">
        <h1 className="text-[40px] text-[#0a0a0a] font-bold mb-[40px]">
          Got questions? We are here to assist!
        </h1>
        <p className="text-[#535353]">
          Send us an email at{" "}
          <span className="text-[#0a0a0a] underline">
            hello@monzonecredit.com
          </span>
        </p>
      </div>
      <div className="flex gap-[90px] w-[700px] flex-wrap">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
}

export default FaqComponent;
