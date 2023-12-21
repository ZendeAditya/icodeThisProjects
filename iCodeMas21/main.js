const faq = document.getElementById("faq");

const faqArray = [
  {
    id: 1,
    question: "How can I track my order?",
    answer:
      "You can track your order by logging into your account and navigating to the 'Order History' section. There, you'll find the status and tracking information for your recent purchases.",
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer:
      "We accept a variety of payment methods, including credit/debit cards (Visa, MasterCard, American Express), PayPal, and other secure payment gateways. You can choose your preferred method during the checkout process.",
  },
  {
    id: 3,
    question: "How can I return an item?",
    answer:
      "To initiate a return, go to your 'Order History,' select the order containing the item you want to return, and follow the provided instructions. Make sure to check our return policy for eligibility and guidelines.",
  },
  {
    id: 4,
    question: "Are there any shipping charges?",
    answer:
      "Shipping charges vary depending on your location and the shipping method selected. You can view the shipping costs during the checkout process before completing your purchase. We may offer free shipping promotions periodically, so keep an eye out for those.",
  },
  {
    id: 5,
    question: "How do I contact customer support?",
    answer:
      "If you have any questions or concerns, our customer support team is here to help. You can reach us through the 'Contact Us' page on our website or by emailing support@example.com. We aim to respond to inquiries within 24 hours.",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const renderQuestions = () => {
    const ulEle = document.createElement("ul");
    ulEle.classList = `flex flex-col w-[40rem]  justify-center p-8`;
    faqArray.forEach((que, index) => {
      const liEle = document.createElement("li");
      liEle.classList = `flex items-start justify-between text-sm p-4 border-2 m-2 shadow-md shadow-gray-400 bg-neutral-300/20`;
      liEle.innerHTML = `
        <div class="">
        <h2 class="font-semibold">${que.question}</h2>
        <p class="question hidden ">${que.answer}</p>
        </div>
        <div>
            <svg data-index="${index}"  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus plus cursor-pointer" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
        </div>
        `;
      ulEle.appendChild(liEle);
    });
    faq.appendChild(ulEle);

    const plusIcons = document.querySelectorAll(".plus");
    const answers = document.querySelectorAll(".question");

    plusIcons.forEach((plusIcon) => {
      plusIcon.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        answers[index].classList.toggle("hidden");
      });
    });
  };
  renderQuestions();
});
