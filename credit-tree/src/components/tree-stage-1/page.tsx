export default function TreeStage1() {
  return (
    <>
      <group
        position-y={2}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <mesh position-y={2} scale={1.4} castShadow receiveShadow>
          <sphereGeometry />
          <meshStandardMaterial color="green" />
        </mesh>

        <mesh position-x={-1} scale={2.1} castShadow receiveShadow>
          <sphereGeometry />
          <meshStandardMaterial color="green" />
        </mesh>

        <mesh position-x={1} scale={1.8} castShadow receiveShadow>
          <sphereGeometry />
          <meshStandardMaterial color="green" />
        </mesh>

        <mesh position-z={1} scale={2} castShadow receiveShadow>
          <sphereGeometry />
          <meshStandardMaterial color="green" />
        </mesh>

        <mesh position-z={-1} scale={2} castShadow receiveShadow>
          <sphereGeometry />
          <meshStandardMaterial color="green" />
        </mesh>
      </group>

      <mesh position-y={-4}>
        <cylinderGeometry args={[0.8, 0.8, 10]} />
        <meshStandardMaterial color="#632e12" />
      </mesh>
    </>
  );
}
