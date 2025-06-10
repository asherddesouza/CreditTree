export default function TreeStage1() {
  return (
    <>
      <group
        position-y={2}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <mesh position-y={-4}>
          <cylinderGeometry args={[0.8, 0.8, 10]} />
          <meshStandardMaterial color="#632e12" />
        </mesh>
      </group>
    </>
  );
}
