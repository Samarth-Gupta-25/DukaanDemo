import React from 'react';
import TableItems from './TableItems';
import RightCenterItems from './RightCenterItems';

function Right() {
  return (
    <div className='bg-[#fafafa] min-w-[1274px] h-[1576px]'>
      <div className='flex h-[64px] justify-between items-center bg-white border-b-[1.5px] p-2 pl-8 pr-8'>
    <div className='flex gap-4 items-center'>
        <h2>Payments</h2>
        <div className='flex items-center gap-1 w-[100px]'>
            <svg class="!relative !w-[14px] !h-[14px]" fill="none" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_16252_2522)"><path clip-rule="evenodd" d="M7.77783 10.1808C7.77783 10.6103 7.42968 10.9584 7.00022 10.9584C6.57076 10.9584 6.22261 10.6103 6.22261 10.1808C6.22261 9.75137 6.57076 9.40322 7.00022 9.40322C7.42968 9.40322 7.77783 9.75137 7.77783 10.1808Z" fill="#4D4D4D" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M6.12724 3.40771C6.54406 3.23506 7.00271 3.18988 7.4452 3.2779C7.88769 3.36592 8.29414 3.58317 8.61315 3.90219C8.93217 4.2212 9.14942 4.62765 9.23744 5.07014C9.32546 5.51263 9.28028 5.97128 9.10763 6.3881C8.93498 6.80491 8.64261 7.16117 8.26749 7.41182C8.02339 7.57492 7.75139 7.68854 7.46685 7.74801V7.84799C7.46685 8.10573 7.25791 8.31466 7.00018 8.31466C6.74245 8.31466 6.53351 8.10573 6.53351 7.84799V7.32959C6.53351 7.20582 6.58268 7.08712 6.6702 6.9996C6.75771 6.91209 6.87641 6.86292 7.00018 6.86292C7.26674 6.86292 7.52732 6.78388 7.74895 6.63578C7.97059 6.48769 8.14334 6.2772 8.24535 6.03093C8.34735 5.78466 8.37404 5.51367 8.32204 5.25223C8.27004 4.99079 8.14168 4.75064 7.95319 4.56215C7.7647 4.37366 7.52455 4.2453 7.26311 4.1933C7.00167 4.14129 6.73068 4.16799 6.48441 4.26999C6.23814 4.372 6.02765 4.54475 5.87956 4.76639C5.73146 4.98802 5.65242 5.2486 5.65242 5.51516C5.65242 5.77289 5.44349 5.98183 5.18575 5.98183C4.92802 5.98183 4.71909 5.77289 4.71909 5.51516C4.71909 5.064 4.85287 4.62298 5.10352 4.24785C5.35417 3.87273 5.71043 3.58036 6.12724 3.40771Z" fill="#4D4D4D" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z" fill="#4D4D4D" fill-rule="evenodd"></path></g><defs><clipPath id="clip0_16252_2522"><rect fill="white" height="14" width="14"></rect></clipPath></defs></svg>
            <p className='text-[13px] text-gray-700 -mt-1'>How it works</p>
        </div>
    </div>
    <div className='w-[500px] flex justify-start'>
        <div className='flex items-center gap-2 bg-[#f2f2f2] w-[420px] p-2 pl-3 rounded-[4px]'>
            <img class="w-[16px] h-[16px] mt-[2px]" src="https://c.animaapp.com/WKWi4JMK/img/icons-search.svg" alt="Icons search"/>
                <p className='text-gray-500'>Search features, tutorials, etc.</p>
            </div>
    </div>
    
    <div className='flex items-center gap-2'>
        <div>
        <svg class="!relative !w-[40px] !h-[40px]" fill="none" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_0_1223)"><circle cx="18" cy="18" fill="#E6E6E6" r="18"></circle><path d="M25.5789 9.02136L10.0042 12.0441C9.41684 12.1491 9 12.7158 9 13.3666V20.2517C9 20.9025 9.41684 21.4692 10.0042 21.5742L11.5958 21.8891C12.24 23.0646 13.4526 25.1007 15.0821 26.759C15.6316 27.3258 16.5411 26.822 16.4274 25.9824C16.2758 24.8698 16.3137 23.6733 16.3705 22.8337L25.5789 24.6389C26.3179 24.7859 27 24.1561 27 23.3165V10.3438C27 9.50416 26.3179 8.87442 25.5789 9.02136ZM14.8168 17.6698C14.8168 17.9007 14.6463 18.0896 14.4379 18.0896H12.8842C12.6758 18.0896 12.5053 17.9007 12.5053 17.6698V15.9485C12.5053 15.7176 12.6758 15.5287 12.8842 15.5287H14.4379C14.6463 15.5287 14.8168 15.7176 14.8168 15.9485V17.6698ZM19.1558 17.6698C19.1558 17.9007 18.9853 18.0896 18.7768 18.0896H17.2232C17.0147 18.0896 16.8442 17.9007 16.8442 17.6698V15.9485C16.8442 15.7176 17.0147 15.5287 17.2232 15.5287H18.7768C18.9853 15.5287 19.1558 15.7176 19.1558 15.9485V17.6698ZM23.5137 17.6698C23.5137 17.9007 23.3432 18.0896 23.1347 18.0896H21.5811C21.3726 18.0896 21.2021 17.9007 21.2021 17.6698V15.9485C21.2021 15.7176 21.3726 15.5287 21.5811 15.5287H23.1158C23.3242 15.5287 23.4947 15.7176 23.4947 15.9485V17.6698H23.5137Z" fill="#4D4D4D"></path></g><defs><clipPath id="clip0_0_1223"><rect fill="white" height="36" width="36"></rect></clipPath></defs></svg>
        </div>
        <div className='relative w-[40px] h-[40px] bg-gray-200 rounded-full'>
        <img className='absolute top-[16px] left-[13px]' src="https://c.animaapp.com/WKWi4JMK/img/polygon-2-9.svg" alt="Polygon"/>
        </div>
    </div>
      </div>
      <div className='flex flex-col justify-between h-[280px] p-2 pl-8 pr-8'>
        <div className='flex justify-between mt-6'>
            <h2 className='text-[23px]'>Overview</h2>
            <div className='flex items-center justify-center gap-2 w-[140px] p-1 rounded-[4px] border-[1.5px] bg-white'>
                <p className='text-[17px] text-gray-600'>Last Month</p>
                <svg className="!w-[16px] !h-[16px]" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z" fill="#4D4D4D"></path></svg>
            </div>
        </div>
        <div className='flex justify-between h-[45%]'>
            <RightCenterItems text={'Online orders'} amount={231}/>
            <RightCenterItems text={'Amount recieved'} amount={'₹23,92,312.19'}/>
            {/* <div className='bg-white w-[598px] rounded-[6px] flex flex-col items-start justify-between pl-5 p-4'>
                <p className='text-[17px] text-gray-600'>Online orders</p>
                <h2 className='text-[34px]'>231</h2>
            </div>
            <div className='bg-white w-[598px] rounded-[6px] flex flex-col items-start justify-between pl-5 p-4'>
                <p className='text-[17px] text-gray-600'>Amount recieved</p>
                <h2 className='text-[34px]'>₹23,92,312.19</h2>
            </div> */}
        </div>
        <div className='w-[300px] flex justify-start'>
            <h1 className='text-[22px]'>Transactions <span className='text-[26px]'>|</span> This Month</h1>
        </div>
      </div>
      <div className='max-h-[1208px] bg-white ml-8 mr-8 m-3 rounded-[5px]'>
        <div className='flex flex-col p-4'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2 border-[1.5px] w-[280px] pl-4 p-2 rounded-[4px]'>
                <svg class="mt-[2px] !w-[14px] !h-[14px]" fill="none" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_16252_787)"><path d="M5.95 10.5263C3.4412 10.5263 1.4 8.48 1.4 5.96491C1.4 3.44982 3.4412 1.40351 5.95 1.40351C8.4588 1.40351 10.5 3.44982 10.5 5.96491C10.5 8.48 8.4588 10.5263 5.95 10.5263ZM10.7443 9.48281C11.4674 8.49474 11.9 7.2814 11.9 5.96491C11.9 2.67579 9.2309 0 5.95 0C2.6691 0 0 2.67579 0 5.96491C0 9.25403 2.6691 11.9298 5.95 11.9298C7.4137 11.9298 8.7542 11.3944 9.7909 10.5116L12.2528 12.9796C12.3893 13.1165 12.5685 13.1853 12.7477 13.1853C12.9269 13.1853 13.1061 13.1165 13.2426 12.9796C13.5163 12.7053 13.5163 12.2618 13.2426 11.9874L10.7443 9.48281Z" fill="#999999"></path></g><defs><clipPath id="clip0_16252_787"><rect fill="white" height="14" width="14"></rect></clipPath></defs></svg>
                <p className='text-[#999]'>Search by order ID...</p>
                </div>
                <div className='flex items-center justify-end gap-2 w-[200px]'>
                    <div className='flex flex-row-reverse gap-2 justify-center items-center w-[80px] h-[35px] rounded-[4px] border-[1.5px] border-[#d9d9d9]'>
                    <svg class="!relative !w-[16px] !h-[16px]" fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M1.62301 9.93375C1.83129 9.72547 2.16897 9.72547 2.37725 9.93375L4.641 12.1975L6.90474 9.93375C7.11302 9.72547 7.45071 9.72547 7.65899 9.93375C7.86727 10.142 7.86727 10.4797 7.65899 10.688L5.01812 13.3289C4.80984 13.5371 4.47215 13.5371 4.26387 13.3289L1.62301 10.688C1.41473 10.4797 1.41473 10.142 1.62301 9.93375Z" fill="#4D4D4D" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M4.64095 2.51515C4.9355 2.51515 5.17428 2.75393 5.17428 3.04849L5.17428 12.9517C5.17428 13.2463 4.9355 13.4851 4.64095 13.4851C4.3464 13.4851 4.10762 13.2463 4.10762 12.9517L4.10762 3.04849C4.10762 2.75393 4.3464 2.51515 4.64095 2.51515Z" fill="#4D4D4D" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M14.3772 6.06646C14.169 6.27474 13.8313 6.27474 13.623 6.06646L11.3592 3.80272L9.0955 6.06646C8.88722 6.27474 8.54953 6.27474 8.34126 6.06646C8.13298 5.85818 8.13298 5.52049 8.34126 5.31221L10.9821 2.67135C11.1904 2.46307 11.5281 2.46307 11.7364 2.67135L14.3772 5.31221C14.5855 5.52049 14.5855 5.85818 14.3772 6.06646Z" fill="#4D4D4D" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M11.3593 13.4851C11.0647 13.4851 10.826 13.2463 10.826 12.9517L10.826 3.04847C10.826 2.75392 11.0647 2.51514 11.3593 2.51514C11.6538 2.51514 11.8926 2.75392 11.8926 3.04847L11.8926 12.9517C11.8926 13.2463 11.6538 13.4851 11.3593 13.4851Z" fill="#4D4D4D" fill-rule="evenodd"></path></svg>
                    <p className='text-[#4d4d4d] text-[17px]'>Sort</p>
                    </div>
                    <div>
                    <img class="w-[36px] relative h-[36px]" alt="Group" src="https://c.animaapp.com/WKWi4JMK/img/group-898.png"/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center pl-3 pr-3 bg-[#f2f2f2] h-[38px] mt-3 rounded-[4px]'>
                    <div><h2 className='text-[#575656] text-[15px] font-medium'>Order ID</h2></div>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-[#575656] text-[15px] font-medium'>Order date</h2>
                        <svg class="!relative !w-[8px] !h-[8px]" fill="none" height="8" viewBox="0 0 8 8" width="8" xmlns="http://www.w3.org/2000/svg"><path d="M3.43025 6.23409L0.606918 2.3286C0.548707 2.24507 0.517907 2.15037 0.517581 2.05392C0.517255 1.95746 0.547415 1.86262 0.60506 1.77882C0.662705 1.69502 0.745826 1.62519 0.846154 1.57627C0.946481 1.52736 1.06052 1.50106 1.17692 1.5H6.82358C6.93998 1.50106 7.05402 1.52736 7.15435 1.57627C7.25468 1.62519 7.3378 1.69502 7.39544 1.77882C7.45309 1.86262 7.48325 1.95746 7.48292 2.05392C7.4826 2.15037 7.45179 2.24507 7.39358 2.3286L4.57025 6.23409C4.51083 6.31526 4.42716 6.38238 4.32732 6.42895C4.22747 6.47553 4.11483 6.5 4.00025 6.5C3.88567 6.5 3.77303 6.47553 3.67319 6.42895C3.57334 6.38238 3.48967 6.31526 3.43025 6.23409Z" fill="#4D4D4D"></path></svg>
                    </div>
                    <div><h2 className='text-[#575656] text-[15px] font-medium'>Order amount</h2></div>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-[#575656] text-[15px] font-medium'>Transaction fees</h2>
                    <svg class="!relative !w-[14px] !h-[14px]" fill="none" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_0_5817)"><path clip-rule="evenodd" d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z" fill="#4D4D4D" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M7.00019 6.62382C7.25793 6.62382 7.46686 6.83276 7.46686 7.09049L7.46687 9.44604C7.46687 9.70377 7.25794 9.9127 7.00021 9.9127C6.74247 9.9127 6.53354 9.70377 6.53354 9.44604L6.53353 7.09049C6.53353 6.83276 6.74246 6.62382 7.00019 6.62382Z" fill="#4D4D4D" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M7.52801 4.75852C7.52801 5.05002 7.29171 5.28633 7.00021 5.28633C6.70871 5.28633 6.4724 5.05002 6.4724 4.75852C6.4724 4.46702 6.70871 4.23072 7.00021 4.23072C7.29171 4.23072 7.52801 4.46702 7.52801 4.75852Z" fill="#4D4D4D" fill-rule="evenodd"></path></g><defs><clipPath id="clip0_0_5817"><rect fill="white" height="14" width="14"></rect></clipPath></defs></svg>
                    </div>
                </div>
                <div>
                    <TableItems/>
                    <TableItems/>
                    <TableItems/>
                    <TableItems/>
                    <TableItems/>
                    <TableItems/>
                    <TableItems/>
                    <TableItems/>
                    <TableItems/>
                    <TableItems/>
                    <TableItems/>
                    <TableItems/>
                    <TableItems/>
                    <TableItems/>
                    <TableItems/>
                    <TableItems/>
                    <TableItems/>
                    <TableItems/>
                    <TableItems/>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center justify-center gap-2 border-[#d9d9d9] border-[1.5px] rounded-[4px] p-1 pl-2 pr-3'>
                    <svg class="!relative !w-[18px] !h-[18px]" fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.7803 3.96967C11.4874 3.67678 11.0126 3.67678 10.7197 3.96967L6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033L10.7197 14.0303C11.0126 14.3232 11.4874 14.3232 11.7803 14.0303C12.0732 13.7374 12.0732 13.2626 11.7803 12.9697L7.81066 9L11.7803 5.03033C12.0732 4.73744 12.0732 4.26256 11.7803 3.96967Z" fill="#4D4D4D" fill-rule="evenodd"></path></svg>
                    <p className='text-[#6c6b6b] font-[500]'>Previous</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div><p className='text-[#6c6b6b]'>1</p></div>
                        <div><p className='text-[#6c6b6b]'>...</p></div>
                        <div className='bg-[#146eb4] w-[28px] h-[28px] flex items-center justify-center rounded-[3px] text-[#fff] font-medium'><p>10</p></div>
                        <div><p className='text-[#6c6b6b]'>11</p></div>
                        <div><p className='text-[#6c6b6b]'>12</p></div>
                        <div><p className='text-[#6c6b6b]'>13</p></div>
                        <div><p className='text-[#6c6b6b]'>14</p></div>
                        <div><p className='text-[#6c6b6b]'>15</p></div>
                        <div><p className='text-[#6c6b6b]'>16</p></div>
                        <div><p className='text-[#6c6b6b]'>17</p></div>
                        <div><p className='text-[#6c6b6b]'>18</p></div>
                    </div>
                    <div className='flex items-center justify-center gap-2 border-[#d9d9d9] border-[1.5px] rounded-[4px] p-1 pl-3 pr-2'>
                        <p className='text-[#6c6b6b] font-[500]'>Next</p>
                        <svg class="!relative !w-[18px] !h-[18px]" fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z" fill="#4D4D4D" fill-rule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Right;
