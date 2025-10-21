import DatePicker from "react-datepicker";
import Loading from "../loading/Loading";
import PhoneInput from "react-phone-input-2";

import { useForm, Controller } from "react-hook-form";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useDisableScroll } from "../../hooks/useDisableScroll";
import { timeSlots } from "../../data/time-slots";

import "react-phone-input-2/lib/style.css";
import "react-datepicker/dist/react-datepicker.css";
import "./ReservationForm.css";

const ReservationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useDisableScroll(isSubmitting);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => {
      reset();
      setSubmitSuccess(false);
    }, 3000);
  };

  if (isSubmitting) return <Loading />;

  return (
    <section
      className="reservation-form-section"
      role="form"
      aria-labelledby="reservation-form-title"
      aria-describedby="reservation-form-desc"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="reservation-form"
        aria-live="polite"
      >
        {submitSuccess && (
          <div
            className="success-message"
            role="status"
            aria-live="polite"
            aria-label="Reservation submitted successfully"
            data-testid="success-message" // <-- EZ AZ EGY SOR KELL
          >
            <Icon icon="mdi:check-circle" aria-hidden="true" />
            Reservation submitted successfully!
          </div>
        )}

        {/* Customer Information */}
        <div className="form-section">
          <h2 id="reservation-form-title">Customer Information</h2>

          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Howard Phillips Lovecraft"
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "error-name" : undefined}
              className={errors.name ? "error" : ""}
              {...register("name", {
                required: "Please provide your name",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
            />
            {errors.name && (
              <span id="error-name" className="error-message" role="alert">
                <Icon icon="mdi:alert-circle" aria-hidden="true" />
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="cthulhu.lives@deepsea.com"
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "error-email" : undefined}
              className={errors.email ? "error" : ""}
              {...register("email", {
                required: "Please provide your email address",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span id="error-email" className="error-message" role="alert">
                <Icon icon="mdi:alert-circle" aria-hidden="true" />
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Please provide your phone number",
                validate: (value) =>
                  value && value.length >= 6
                    ? true
                    : "Please enter a valid phone number",
              }}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  country={"us"}
                  value={value}
                  onChange={onChange}
                  inputProps={{
                    name: "phone",
                    required: true,
                    id: "phone",
                    "aria-required": "true",
                    "aria-invalid": errors.phone ? "true" : "false",
                    "aria-describedby": errors.phone
                      ? "error-phone"
                      : undefined,
                  }}
                  inputClass={errors.phone ? "error" : ""}
                  placeholder="+1 234 567 890"
                />
              )}
            />
            {errors.phone && (
              <span id="error-phone" className="error-message" role="alert">
                <Icon icon="mdi:alert-circle" aria-hidden="true" />
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>

        {/* Reservation Details */}
        <div className="form-section" aria-label="Reservation details">
          <h2>Reservation Details</h2>

          <div className="form-row">
            {/* Date */}
            <div className="form-group">
              <label htmlFor="date">Select a date</label>
              <div className="date-picker-wrapper">
                <Controller
                  control={control}
                  name="date"
                  rules={{ required: "Please select a date" }}
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      placeholderText="Select a date"
                      dateFormat="MM/dd/yyyy"
                      minDate={new Date()}
                      className={errors.date ? "error" : ""}
                      aria-required="true"
                      aria-invalid={errors.date ? "true" : "false"}
                      aria-describedby={errors.date ? "error-date" : undefined}
                    />
                  )}
                />
                <button
                  type="button"
                  className="calendar-icon-btn"
                  aria-label="Open calendar date picker"
                >
                  <Icon icon="mdi:calendar" aria-hidden="true" />
                </button>
              </div>
              {errors.date && (
                <span id="error-date" className="error-message" role="alert">
                  <Icon icon="mdi:alert-circle" aria-hidden="true" />
                  {errors.date.message}
                </span>
              )}
            </div>

            {/* Time */}
            <div className="form-group">
              <label htmlFor="time">Select a time</label>
              <select
                id="time"
                aria-required="true"
                aria-invalid={errors.time ? "true" : "false"}
                aria-describedby={errors.time ? "error-time" : undefined}
                className={errors.time ? "error" : ""}
                {...register("time", {
                  required: "Please select a time",
                })}
              >
                <option value="">Select a time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              {errors.time && (
                <span id="error-time" className="error-message" role="alert">
                  <Icon icon="mdi:alert-circle" aria-hidden="true" />
                  {errors.time.message}
                </span>
              )}
            </div>

            {/* Guests */}
            <div className="form-group">
              <label htmlFor="guests">Guests number</label>
              <input
                id="guests"
                type="number"
                placeholder="Number of guests"
                min="1"
                max="20"
                aria-required="true"
                aria-invalid={errors.guests ? "true" : "false"}
                aria-describedby={errors.guests ? "error-guests" : undefined}
                className={errors.guests ? "error" : ""}
                {...register("guests", {
                  required: "Please specify the number of guests",
                  min: {
                    value: 1,
                    message: "At least 1 guest is required",
                  },
                  max: {
                    value: 20,
                    message: "Maximum 20 guests allowed",
                  },
                })}
              />
              {errors.guests && (
                <span id="error-guests" className="error-message" role="alert">
                  <Icon icon="mdi:alert-circle" aria-hidden="true" />
                  {errors.guests.message}
                </span>
              )}
            </div>
          </div>

          {/* Occasion */}
          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <input
              id="occasion"
              type="text"
              placeholder="Purpose of the reservation"
              aria-label="Occasion or reason for the reservation"
              {...register("occasion")}
            />
          </div>

          {/* Special Requests */}
          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea
              id="specialRequests"
              placeholder="Special requests for the reservation"
              rows="4"
              aria-label="Special requests for your reservation"
              {...register("specialRequests")}
            />
          </div>
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={isSubmitting}
          aria-label="Confirm reservation"
        >
          Confirm Reservation
          <Icon icon="mdi:arrow-right" aria-hidden="true" />
        </button>
      </form>
    </section>
  );
};

export default ReservationForm;
