import React from "react";

export const icons = (icon) => {
    switch (icon) {
        case 'plusIcon':
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0369 8.4624V15.6108" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M15.6147 12.0366H8.45886" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M2.30005 12.0366C2.30005 4.73454 4.73479 2.2998 12.0369 2.2998C19.339 2.2998 21.7737 4.73454 21.7737 12.0366C21.7737 19.3388 19.339 21.7735 12.0369 21.7735C4.73479 21.7735 2.30005 19.3388 2.30005 12.0366Z"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        case 'sendIcon':
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M11.4933 12.438C11.4933 12.438 -0.483351 9.96037 3.6786 7.55782C7.19075 5.53052 19.2947 2.04497 20.9857 2.94557C21.8863 4.63657 18.4007 16.7405 16.3734 20.2527C13.9709 24.4146 11.4933 12.438 11.4933 12.438Z"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.4933 12.4382L20.9857 2.9458" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

        case 'deleteIcon':
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Iconly/Curved/Delete">
                    <g id="Delete">
                        <path id="Stroke 1"
                              d="M18.8892 9.55371C18.8892 17.5728 20.0435 21.1975 12.2797 21.1975C4.5149 21.1975 5.693 17.5728 5.693 9.55371"
                              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Stroke 3" d="M20.3652 6.47961H4.21472" stroke="currentColor" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Stroke 5"
                              d="M15.7149 6.47958C15.7149 6.47958 16.2435 2.71387 12.2892 2.71387C8.3359 2.71387 8.86447 6.47958 8.86447 6.47958"
                              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </g>
            </svg>

        default:
            return null
    }
}