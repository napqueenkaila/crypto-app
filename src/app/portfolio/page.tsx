"use client";
import styled from "styled-components";
import AddAssetModal from "../components/Portfolio/AddAsset/AddAssetModal";
import { useState } from "react";

const PageWrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
`;

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  return (
    <PageWrapper>
      <div>
        <div>Portfolio</div>
        <button onClick={() => setShowModal(true)}>Add Asset</button>
      </div>
      {showModal && <AddAssetModal setShowModal={setShowModal} />}
    </PageWrapper>
  );
}
