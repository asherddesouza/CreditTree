import {
  TreeStage,
  CameraSettings,
  BirdScale,
  BirdYPositionRange,
  BirdMinDistance,
} from "./page.client";
import { expect } from "vitest";

describe("TreeStage works correctly", () => {
  it("returns correct stage for credit score 97", () => {
    expect(TreeStage(97)).toBe(1);
  });

  it("returns correct stage for credit score 335", () => {
    expect(TreeStage(335)).toBe(2);
  });

  it("returns correct stage for credit score 555", () => {
    expect(TreeStage(555)).toBe(3);
  });

  it("returns correct stage for credit score 615", () => {
    expect(TreeStage(615)).toBe(4);
  });

  it("returns correct stage for credit score 931", () => {
    expect(TreeStage(931)).toBe(5);
  });
  it("returns correct stage for an out of bounds number", () => {
    expect(TreeStage(9999)).toBe(5);
  });
});

describe("CameraSettings works correctly", () => {
  it("returns correct camera settings for credit score 97", () => {
    expect(CameraSettings(97)).toEqual({
      fov: 45,
      near: 0.1,
      far: 400,
      position: [-30, 0, 20],
    });
  });

  it("returns correct camera settings for credit score 335", () => {
    expect(CameraSettings(335)).toEqual({
      fov: 45,
      near: 0.1,
      far: 400,
      position: [-30, 0, 20],
    });
  });

  it("returns correct camera settings for credit score 555", () => {
    expect(CameraSettings(555)).toEqual({
      fov: 45,
      near: 0.1,
      far: 400,
      position: [-30, 0, 30],
    });
  });

  it("returns correct camera settings for credit score 615", () => {
    expect(CameraSettings(615)).toEqual({
      fov: 45,
      near: 0.1,
      far: 400,
      position: [-30, 60, 160],
    });
  });

  it("returns correct camera settings for credit score 931", () => {
    expect(CameraSettings(931)).toEqual({
      fov: 45,
      near: 0.1,
      far: 400,
      position: [-30, 80, 250],
    });
  });
  it("returns correct camera settings for an out of bounds number", () => {
    expect(CameraSettings(9999)).toEqual({
      fov: 45,
      near: 0.1,
      far: 400,
      position: [-30, 80, 250],
    });
  });
});

describe("BirdScale works correctly", () => {
  it("returns correct scale for credit score 97", () => {
    expect(BirdScale(97)).toBe(0.8);
  });

  it("returns correct scale for credit score 335", () => {
    expect(BirdScale(335)).toBe(1);
  });

  it("returns correct scale for credit score 555", () => {
    expect(BirdScale(555)).toBe(1.2);
  });

  it("returns correct scale for credit score 615", () => {
    expect(BirdScale(615)).toBe(2.5);
  });

  it("returns correct scale for credit score 931", () => {
    expect(BirdScale(931)).toBe(3);
  });
  it("returns correct scale for an out of bounds number", () => {
    expect(BirdScale(9999)).toBe(3);
  });
});

describe("BirdYPositionRange works correctly", () => {
  it("returns correct position for credit score 97", () => {
    expect(BirdYPositionRange(97)).toBeLessThanOrEqual(2);
    expect(BirdYPositionRange(97)).toBeGreaterThanOrEqual(1);
  });

  it("returns correct position for credit score 335", () => {
    expect(BirdYPositionRange(335)).toBeLessThanOrEqual(2);
    expect(BirdYPositionRange(335)).toBeGreaterThanOrEqual(1);
  });

  it("returns correct position for credit score 555", () => {
    expect(BirdYPositionRange(555)).toBeLessThanOrEqual(3);
    expect(BirdYPositionRange(555)).toBeGreaterThanOrEqual(1);
  });

  it("returns correct position for credit score 615", () => {
    expect(BirdYPositionRange(615)).toBeLessThanOrEqual(9);
    expect(BirdYPositionRange(615)).toBeGreaterThanOrEqual(8);
  });

  it("returns correct position for credit score 931", () => {
    expect(BirdYPositionRange(931)).toBeLessThanOrEqual(15);
    expect(BirdYPositionRange(931)).toBeGreaterThanOrEqual(10);
  });
  it("returns correct position for an out of bounds number", () => {
    expect(BirdYPositionRange(9999)).toBeLessThanOrEqual(15);
    expect(BirdYPositionRange(9999)).toBeGreaterThanOrEqual(10);
  });
});

describe("BirdMinDistance works correctly", () => {
  it("returns correct minimum distance for credit score 97", () => {
    expect(BirdMinDistance(97)).toBe(3);
  });

  it("returns correct minimum distance for credit score 335", () => {
    expect(BirdMinDistance(335)).toBe(3.5);
  });

  it("returns correct minimum distance for credit score 555", () => {
    expect(BirdMinDistance(555)).toBe(4);
  });

  it("returns correct minimum distance for credit score 615", () => {
    expect(BirdMinDistance(615)).toBe(12);
  });

  it("returns correct minimum distance for credit score 931", () => {
    expect(BirdMinDistance(931)).toBe(20);
  });
  it("returns correct minimum distance for an out of bounds number", () => {
    expect(BirdMinDistance(9999)).toBe(20);
  });
});
