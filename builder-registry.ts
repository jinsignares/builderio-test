"use client";

import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { LogoGrid } from "./components/LogoGrid";
import { ZPattern } from "./components/ZPattern";
import { FeatureCards } from "./components/FeatureCards";

export const customComponents = [
  {
    component: Hero,
    name: "Hero",
    inputs: [
      { name: "title", type: "string", defaultValue: "Attendance Management Software" },
      { name: "subtitle", type: "string", defaultValue: "TeamSense" },
      { name: "description", type: "richText", defaultValue: "<p>TeamSense simplifies workforce management...</p>" },
      { name: "buttonText", type: "string", defaultValue: "Book a Demo" },
      { name: "buttonLink", type: "string", defaultValue: "/demo" },
      { name: "image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "svg"] },
    ],
  },
  {
    component: LogoGrid,
    name: "LogoGrid",
    inputs: [
      { name: "headline", type: "string", defaultValue: "Trusted by industry leaders" },
      { 
        name: "logos", 
        type: "list", 
        subFields: [
          { name: "name", type: "string", defaultValue: "Company Name" },
          { name: "image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "svg"] },
        ]
      },
    ],
  },
  {
    component: ZPattern,
    name: "ZPattern",
    inputs: [
      { name: "headline", type: "string", defaultValue: "Feature Highlight" },
      { name: "description", type: "richText", defaultValue: "<p>Feature description...</p>" },
      { name: "image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "svg"] },
      { name: "imagePosition", type: "string", enum: ["left", "right"], defaultValue: "right" },
      { name: "backgroundColor", type: "string", enum: ["white", "gray"], defaultValue: "white" },
    ],
  },
  {
    component: FeatureCards,
    name: "FeatureCards",
    inputs: [
      { name: "headline", type: "string", defaultValue: "Why choose TeamSense?" },
      { name: "backgroundColor", type: "string", enum: ["white", "gray"], defaultValue: "white" },
      { 
        name: "cards", 
        type: "list", 
        subFields: [
          { name: "title", type: "string", defaultValue: "Feature Title" },
          { name: "description", type: "string", defaultValue: "Feature description goes here." },
          { name: "icon", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "svg"] },
          { name: "link", type: "string" },
        ]
      },
    ],
  },
  {
    component: Testimonials,
    name: "Testimonials",
    inputs: [
      { name: "title", type: "string", defaultValue: "Trusted by innovative companies" },
      { 
        name: "testimonials", 
        type: "list", 
        subFields: [
          { name: "quote", type: "string", defaultValue: "Great product!" },
          { name: "author", type: "string", defaultValue: "John Doe" },
          { name: "role", type: "string", defaultValue: "Manager" },
          { name: "company", type: "string", defaultValue: "Acme Inc" },
          { name: "avatar", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "svg"] },
        ]
      },
    ],
  },
];
