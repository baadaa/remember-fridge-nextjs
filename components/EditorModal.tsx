import { CloseButton } from "./Buttons/Buttons";

const EditorModal = ({closeModal = () => {}}) => {
  
  return (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'black',
      backgroundColor: 'var(--settingOverlayBg)',
      zIndex:9,
    }}
  >
    <CloseButton click={closeModal} />

  </div>
)};

export default EditorModal;
