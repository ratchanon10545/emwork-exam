interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }
  
  const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center  bg-opacity-30 backdrop-blur-md z-50">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-[90%] max-w-md relative">
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  