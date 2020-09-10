import React from "react"

import {
  PriceCard,
  CardContainer,
  ClassesPerWeek,
  OuterPricingContainer,
  PricingContainer,
  Strike,
  Price,
  PerMonth,
  PrivatePricing,
  PricingHeadline,
} from "./pricingStyled"

export default function Pricing() {
  const pricing = [
    { numClasses: "1 Class", strike: "", price: "72" },
    {
      numClasses: "2 Classes",
      strike: "144",
      price: "125",
      popular: true,
    },
    { numClasses: "3 Classes", strike: "216", price: "151" },
    { numClasses: "4 Classes", strike: "208", price: "189" },
    { numClasses: "5 Classes", strike: "360", price: "229" },
    { numClasses: "6 Classes", strike: "432", price: "259" },
    { numClasses: "7 Classes", strike: "360", price: "289" },
  ]

  return (
    <>
      <PricingHeadline>Pricing</PricingHeadline>
      <CardContainer>
        {pricing.map(price => (
          <PriceCard popular={price.popular}>
            <ClassesPerWeek>{price.numClasses} per Week</ClassesPerWeek>
            <OuterPricingContainer>
              <PricingContainer>
                {price.strike && (
                  <Strike>
                    <sup>$</sup>
                    {price.strike}
                  </Strike>
                )}{" "}
                <Price>
                  <sup>$</sup>
                  {price.price}
                </Price>
              </PricingContainer>
              <PerMonth>Per Month</PerMonth>
            </OuterPricingContainer>
          </PriceCard>
        ))}
        <PriceCard>
          <ClassesPerWeek>Private Lessons</ClassesPerWeek>
          <OuterPricingContainer>
            <PricingContainer>
              <PrivatePricing>
                <p>30 Minutes</p>
                <Price>
                  <sup>$</sup>
                  30
                </Price>
              </PrivatePricing>
              <PrivatePricing>
                <p>60 Minutes</p>
                <Price>
                  <sup>$</sup>
                  50
                </Price>
              </PrivatePricing>
            </PricingContainer>
          </OuterPricingContainer>
          <p style={{ fontSize: "1rem" }}>Cash Only</p>
        </PriceCard>
      </CardContainer>
    </>
  )
}
