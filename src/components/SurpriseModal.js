import React, { useState } from 'react';
import './SurpriseModal.css';

function SurpriseModal() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <button className="surprise-btn" onClick={toggleModal}>
        🎁 Apke liye Surprise!
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={toggleModal}>&times;</span>
            <h2>🎉 Surprise! 🎉</h2>
            <p>Aap Duniya me sabse best ho Vasu ji, and I’m so lucky to have you in my life. Lets enjoy this special day! 💖</p>
            {/* Add the image below the message */}
            <img src="/images/surprise.jpg" alt="Surprise" className="surprise-image" />
          </div>
        </div>
      )}
    </>
  );
}

export default SurpriseModal;
