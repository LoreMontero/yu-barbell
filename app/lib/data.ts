import { Lift } from "./interfaces";

export const mainLifts: Lift[] = [
  {
    name: "High Bar Squat",
    converstion: 1,
    variation: "squat",
  },
  {
    name: "Low Bar Squat",
    converstion: 1,
    variation: "squat",
  },
  {
    name: "Bench Press",
    converstion: 1,
    variation: "bench",
  },
  {
    name: "Deadlift",
    converstion: 1,
    variation: "deadlift",
  },
];

export const Variations: Lift[] = [
  {
    name: "Pause Squat",
    converstion: 0.9, //This Might be wrong change later
    variation: "squat",
  },
  {
    name: "Pause Bench",
    converstion: 0.9, //This Might be wrong change later
    variation: "bench",
  },
  {
    name: "Pause Deadlift",
    converstion: 0.9, //This Might be wrong change later
    variation: "deadlift",
  },
  {
    name: "Romanian Deadlift",
    converstion: 0.8, //This Might be wrong change later
    variation: "deadlift",
  },
  {
    name: "Safety Squat Bar",
    converstion: 0.7, //This Might be wrong change later
    variation: "squat",
  },
  {
    name: "Close Grip Bench",
    converstion: 0.85, //This Might be wrong change later
    variation: "bench",
  },
  {
    name: "Larson Press",
    converstion: 0.85, //This Might be wrong change later
    variation: "bench",
  },
  {
    name: "Board Press",
    converstion: 0.85, //This Might be wrong change later
    variation: "bench",
  },
];
