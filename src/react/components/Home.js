import React from 'react';
import logoCI2DT2 from '../CI2DT2.png';

export default function Home() {

    return (
        <>
            <meta name="xm-bind-id-client_id" content="[033024c4.6ed1f6ae.tid_385f9417.bindid.io]" />

            <script src="https://polyfill.io/v3/polyfill.min.js?features=Promise%2CPromise.prototype.finally%2CTextDecoder%2CTextEncoder%2CObject.entries"></script>
            <script src="https://signin.bindid-sandbox.io/bindid-sdk/transmit-bind-id-sdk.js" defer></script>
            
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <img src={logoCI2DT2} style={{ width: 594, height: 441 }} />
                    </div>

                </div>
            </div>
        </>
    );
}