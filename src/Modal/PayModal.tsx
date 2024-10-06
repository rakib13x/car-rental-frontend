import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Button } from "../components/ui/button";
import {
  useConfirmPaymentMutation,
  useCreatePaymentIntentMutation,
} from "../redux/features/booking/bookingAPi";

interface PayModalProps {
  showModal: boolean;
  toggleModal: () => void;
  bookingId: string | null;
  price: number;
  refetchBookings: () => void;
  onPaymentSuccess: (bookingId: string) => void;
}

const PayModal: React.FC<PayModalProps> = ({
  showModal,
  toggleModal,
  bookingId,
  price,
  refetchBookings,
  onPaymentSuccess, // New callback
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  // Redux mutation hooks
  const [createPaymentIntent] = useCreatePaymentIntentMutation();
  const [confirmPayment] = useConfirmPaymentMutation();

  const handlePayment = async () => {
    if (!bookingId || !stripe || !elements) return;

    setIsSubmitting(true);

    try {
      const { data: paymentIntentResponse } = await createPaymentIntent({
        bookingId,
        amount: price,
      });

      const clientSecret = paymentIntentResponse?.clientSecret;

      if (!clientSecret) {
        throw new Error("Failed to create Stripe Payment Intent");
      }

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

      if (result.error) {
        Swal.fire({
          icon: "error",
          title: "Payment Error",
          text: result.error.message,
          confirmButtonText: "OK",
        });
      } else if (result.paymentIntent?.status === "succeeded") {
        await confirmPayment({ paymentIntentId: result.paymentIntent.id });

        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: "Your payment has been completed.",
          confirmButtonText: "OK",
        });

        refetchBookings();

        onPaymentSuccess(bookingId);

        toggleModal();
      }
    } catch (error) {
      console.error("Payment error:", error);
      Swal.fire({
        icon: "error",
        title: "Payment Error",
        text: "There was an issue processing your payment. Please try again.",
        confirmButtonText: "OK",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showModal) return null;

  return (
    <div
      className="py-12 bg-gray-700 bg-opacity-50 transition duration-150 ease-in-out z-10 fixed inset-0 overflow-auto"
      id="modal"
    >
      <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          {/* Close Icon */}
          <div
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
            onClick={toggleModal}
          >
            ...
          </div>

          {/* Modal Header */}
          <div className="w-full flex justify-center text-gray-600 mb-3">
            <h1 className="text-2xl font-bold text-center mb-6">Pay Now</h1>
          </div>

          {/* Stripe Elements Form */}
          <div className="text-center">
            <p className="text-lg mb-4">Booking Amount: ${price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mb-4">
              Please enter your card details to proceed with payment.
            </p>

            {/* CardElement (Stripe credit card input) */}
            <div className="bg-gray-100 p-4 rounded">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#32325d",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#fa755a",
                    },
                  },
                }}
              />
            </div>

            {/* Payment Button */}
            <Button
              onClick={handlePayment}
              disabled={isSubmitting || !stripe || !elements}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded mt-4"
            >
              {isSubmitting ? "Processing..." : "Pay Now"}
            </Button>
          </div>

          {/* Cancel Button */}
          <div className="mt-6 text-center">
            <button
              type="button"
              className="focus:outline-none bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:bg-gray-200 border rounded px-8 py-2"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayModal;
