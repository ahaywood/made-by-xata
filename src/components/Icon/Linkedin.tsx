interface LinkedInProps {
  height?: number;
  width?: number;
}

const LinkedIn = ({ height = 24, width = 24 }: LinkedInProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>LinkedIn</title>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.00527 3H20.9948C20.9977 3 21 3.00236 21 3.00527V20.9948C21 20.9977 20.9977 21 20.9948 21H3.00527C3.00236 21 3 20.9977 3 20.9948V3.00527C3 3.00236 3.00236 3 3.00527 3ZM7.99215 9.15233C8.71058 9.15233 9.29295 8.56995 9.29295 7.8516C9.29295 7.13316 8.71058 6.55078 7.99215 6.55078C7.27379 6.55078 6.69141 7.13316 6.69141 7.8516C6.69141 8.56995 7.27379 9.15233 7.99215 9.15233ZM12.7383 10.7491V9.82035H10.418V16.7812H12.7383V12.5771C12.8595 12.0026 13.2905 11.5078 13.9688 11.5078C14.8125 11.5078 15.1289 12.1406 15.1289 13.0898V16.7812H17.4492V12.8086C17.4492 10.6641 16.3242 9.67965 14.7773 9.67965C13.6297 9.67965 13.033 10.2955 12.7383 10.7491ZM6.83203 16.7812V9.82035H9.15233V16.7812H6.83203Z" />
    </svg>
  )
}

export {LinkedIn}
