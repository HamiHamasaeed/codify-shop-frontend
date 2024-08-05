// src/store/shopData.js
import { defineStore } from "pinia";
import { config } from "@/config.js";

export const useShopStore = defineStore("shop", {
  state: () => ({
    shop: {}, // Initialize with an empty object
  }),
  actions: {
    async fetchShopData(locale) {
      try {
        const apiKey =
          "e48ceba2f6a15f63bf70ad8b3082642f613598f027facaea3c6eeae7399fa9e005453fc1597c9901bcc2cc535bb5a9c90ed55049244b39d8fe1612536ad5be44"; // Replace with actual API key
        const apiUrl = `${config.backendURL}/api/v1/shop/1`; // Correct API endpoint

        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            key: apiKey, // Custom header for the key
            "Accept-Language": locale, // Set the language based on current locale
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");

        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Received non-JSON response");
        }

        const data = await response.json();

         if (data.message) {
           console.log("Message from API:", data.message.value);
        }

        this.shop = data.data; // Adjust based on actual response structure
      } catch (error) {
        console.error("Failed to fetch shop data:", error);
      }
    },
  },
});
