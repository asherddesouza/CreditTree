import { TreeStage, CameraSettings } from "./page.client";

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
