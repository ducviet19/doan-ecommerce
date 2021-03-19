import React, { Component } from 'react';

function Order() {
    return (
        <>
            <div className='wrap row'>
                <div className='sidebar col-lg-6 col-12'>
                    <div className='sidebar-content'>
                        <div className='order-summarry'>
                            <div className='order-summary-product row'>
                                <div className='product-image col-lg-2 col-2'>
                                    <img className='w-50 h-70' src='https://product.hstatic.net/1000341789/product/mausac_mindigo_10f20dpa052__3__bbb9e97fa43045fbbe34b87cf13d3420_master.jpg' />

                                </div>
                                <div className='product-info col-lg-7 col-7'>
                                    <p>Ao len nam</p>
                                    <div>
                                        <span className='mr-2'>Blue/M</span>
                                        <span className='product-quantity'>2</span>
                                    </div>

                                </div>
                                <div className='product-price col-lg-3 col-3'><span>3,120,000</span></div>
                            </div>
                            <div className='order-summary-discount col-lg-12 col-12 px-0'>
                                <form id='discount'>
                                    <input type='text' placeholder='Mã Giảm giá'></input>
                                    <button type='submit'><span>Sử Dụng</span></button>
                                </form>
                            </div>
                            <div className='order-summary-total col-lg-12 col-12 px-0'>
                                <table className='col-lg-12 col-12 px-0'>
                                    <tbody>
                                        <tr className='justify-content-around'>
                                            <td>Tạm Tính</td>
                                            <td><span>3,500,000</span></td>

                                        </tr>
                                        <tr className='justify-content-around'>
                                            <td>Phí vận chuyển</td>
                                            <td>15,000</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr className='justify-content-around'>
                                            <td><span>Tổng cộng</span></td>
                                            <td><span>VND</span><span>3,500,000</span></td>
                                        </tr>
                                    </tfoot>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-12'>

                </div>
            </div>

        </>
    )
}
export default Order