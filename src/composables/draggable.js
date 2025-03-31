import { ref } from 'vue';

export default function (props, target) {
  const dragging = ref(false);

  const offsetX = ref(props.offsetX);
  const offsetY = ref(props.offsetY);

  let initialX = props.offsetX;
  let initialY = props.offsetY;

  function onMouseDown(e) {
    if (!props.draggable) return;
    e.preventDefault();

    dragging.value = true;

    initialX = (target.value || e.target).offsetLeft - e.clientX;
    initialY = (target.value || e.target).offsetTop - e.clientY;

    e.target.onmousemove = onMouseMove;
    e.target.onmouseup = onMouseUp;
  }

  function onMouseMove(e) {
    if (!props.draggable || !dragging.value) return;
    e.preventDefault();

    offsetX.value = (e.clientX + initialX);
    offsetY.value = (e.clientY + initialY);
  }

  function onMouseUp(e) {
    if (!props.draggable) return;

    dragging.value = false;

    e.target.onmouseup = null;
    e.target.onmousemove = null;
  }

  return {
    dragging,
    offsetX,
    offsetY,
    onMouseDown,
  };
}
