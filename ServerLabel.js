const ServerLabel = ({name, status}) => {
  return (
    <span className={status === 'up' ? 'green' : 'red'}>
      {name}
    </span>
  );
}
