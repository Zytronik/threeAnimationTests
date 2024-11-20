import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import { useFBX } from "@react-three/drei";

function Human({ position, scale }) {
  const fbx = useFBX("/humanBodySmall.fbx");
  fbx.traverse((child) => {
    if (child.isMesh) {
      if (child.material) {
        child.material.transparent = true;
        child.material.opacity = 0.5;
        child.material.depthWrite = false;
      }
    }
  });
  return <primitive object={fbx} position={position} scale={scale} />;
}

function DonutAchse({ rotation, position, color, opacity }) {
  return (
    <animated.mesh
      rotation={rotation}
      position={position}
      visible={opacity.to((o) => o > 0)}
    >
      <torusGeometry attach="geometry" args={[2.5, 0.1, 16, 100]} />
      <animated.meshStandardMaterial
        attach="material"
        color={color}
        transparent
        opacity={opacity}
      />
    </animated.mesh>
  );
}

function BigDonut({ rotation, position, color, opacity }) {
  return (
    <animated.mesh
      rotation={rotation}
      position={position}
      visible={opacity.to((o) => o > 0)}
    >
      <torusGeometry attach="geometry" args={[2.3, 2, 16, 100]} />
      <animated.meshBasicMaterial
        attach="material"
        color={color}
        transparent
        opacity={opacity}
        wireframe={true}
      />
    </animated.mesh>
  );
}

function App() {
  const [langachse, setLangachse] = useState(false);
  const [transfersalachse, setTransfersalachse] = useState(false);
  const [querachse, setQuerachse] = useState(false);
  const [querachseBig, setQuerachseBig] = useState(false);
  const achsenOpacity = 0.5;

  const { langachseOpactiy } = useSpring({
    langachseOpactiy: langachse ? achsenOpacity : 0,
    config: { duration: 300 },
  });

  const { transfersalachseOpactiy } = useSpring({
    transfersalachseOpactiy: transfersalachse ? achsenOpacity : 0,
    config: { duration: 300 },
  });

  const { querachseOpactiy } = useSpring({
    querachseOpactiy: querachse ? achsenOpacity : 0,
    config: { duration: 300 },
  });

  const { querachseBigOpactiy } = useSpring({
    querachseBigOpactiy: querachseBig ? 0.1 : 0,
    config: { duration: 300 },
  });

  function toggleLangsachse() {
    setLangachse(!langachse);
  }

  function toggleTransfersalachse() {
    setTransfersalachse(!transfersalachse);
  }

  function toggleQuerachse() {
    setQuerachse(!querachse);
  }

  function toggleQuerachseBig() {
    setQuerachseBig(!querachseBig);
  }

  return (
    <>
      <div className="controls">
        <h1>Animation Tests</h1>
        <button onClick={toggleLangsachse}>Längsachse</button>
        <button onClick={toggleTransfersalachse}>Transfersalachse</button>
        <button onClick={toggleQuerachse}>Querachse</button>
        <button onClick={toggleQuerachseBig}>Querachse Gross</button>
        {langachse && (
          <div className="desc" id="langsachse">
            <h2>Längsachse</h2>
            <p>
              Die Impulsgebung über die Kerninstanz verläuft durch die
              Längsachse bei aufrechtem Stand in kranial-kaudaler Richtung, also
              vom Schädel zum Steißbein. Das heisst, die universelle
              Impulsgebung tritt beim Scheitel ein und aktiviert eine
              Flussrichtung. Diese aktiviert unsere energetisierte Torus-Energie
              um unseren Körper herum.
              <br />
              Unser Weg zum bewussten Menschen, das heisst, unser Zutritt zu den
              inneren Bewusstseinsebenen, verläuft jedoch von «unten nach oben»,
              gleich dem natürlichen Wachstum des Menschen, einer Pflanze oder
              eines Baums.
            </p>
          </div>
        )}
        {transfersalachse && (
          <div className="desc" id="transfersalachse">
            <h2>Transversalachse</h2>
            <p>
              Die Transversalachse verbindet die Längsachse mit der Querachse.
              Sie trägt die Informationsspeicherung der Erinnerungen. Gibt es
              Spannungen, das heisst, das Bedürfnis nach einem „Update“ im
              Informationsspeicher, finden wir meistens auf der Körperebene
              Achsenthematiken wie Hüft-Schulter-Stagnationen, denn diese
              Inhalte bringen grosse, weite Spannungen in unseren materiellen
              Körper.
            </p>
          </div>
        )}
        {(querachse || querachseBig) && (
          <div className="desc" id="querachse">
            <h2>Querachse</h2>
            <p>
              Die Querachse verläuft oberhalb des Herzkörpers. Ihre Schwingung
              breitet sich Richtung Schlüsselbein und zu den Schultern aus. Ihre
              Speicherinhalte sind die ältesten und tragen die lichteste
              Struktur der drei Achsen, da sie die klarsten ursprünglichsten
              Informationen seit der Informationsspeicherung aufweist. Sie ist
              dem Bauplan der Essenz am nächsten. Geprägt durch die
              Lichtschwingung trägt sie den ursprünglichen energetische
              Bau-Code, die essenziellen Prägungen eines Menschen
              <br />
              Auf der Körperinstanz finden wir bei nötigen Themenklärungen
              Stagnationen des Nervensystems wieder. Die Stagnationen sind sehr
              subtil und treten blitzschnell auf und können oft sehr schwer
              zugeordnet werden.
              <br />
              Ein gelebtes Leben ist nur ein Etappensprung unserer
              Informationsspeicherstruktur (Erinnerungsstruktur). Trägt ein
              Mensch die bewussten Erinnerungen dieser Inhalte, so nennt man
              diesen einen «Melchizedek». Ein «Melchizedek» ist jemand, der
              bewusst Zugriff auf seine Erinnerungen der Informationsstruktur
              von der Dichte in die absolute Lichte hat. Heute würde man sagen,
              dass man die lichteren Fixpunkte, das heisst nähere Bestimmungen
              der Ur-Essenz, in sein Leben holen kann. So wird eine Potenzierung
              von lichterer Struktur möglich. Das heisst, dass wir Fixpunkte in
              Form von Erinnerungen aus der Querachse finden. Diese bringen uns
              zusätzlich ins Erleben des «Friedens». Das heisst, dass sie uns in
              unserer Kohärenz beeinflussen.
              <br />
              <br />
              "Man wagt sich hinter das Leben. Jeder Mensch erwartet dort seine
              Seele."
              <br />
              Maurice Chappaz{" "}
            </p>
          </div>
        )}
      </div>

      <div className="three-wrapper">
        <Canvas
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={2}
            intensity={1.5}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Human position={[0, -3, 0]} scale={[0.1, 0.1, 0.1]} />
          <BigDonut
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0.5, 0]}
            color={"yellow"}
            opacity={querachseBigOpactiy}
          />
          <DonutAchse
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 1, 0]}
            color={"yellow"}
            opacity={querachseOpactiy}
          />
          <DonutAchse
            rotation={[0, Math.PI / 2, 0]}
            position={[0, 1, 0]}
            color={"red"}
            opacity={langachseOpactiy}
          />
          <DonutAchse
            rotation={[Math.PI / 2, Math.PI / 4, 0]}
            position={[0, 1, 0]}
            color={"green"}
            opacity={transfersalachseOpactiy}
          />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </>
  );
}

export default App;
