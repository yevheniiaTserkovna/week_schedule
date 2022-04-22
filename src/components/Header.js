function Header({ userName }) {
  return (
    <header className='app-header'>
      <div className='app-header-title'>
        <div className='header-card'>
          <div>week schedule</div>
        </div>
      </div>
      <div className='app-header-user'>
        <div className='header-card'>
          <div>{userName}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
