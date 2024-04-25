import React from 'react'
import DetailedImage from '../Common/DetailedImage'

export default function MasonaryGallery() {
  return (
    <div className="grid grid-cols-3 gap-3 md:grid-cols-3 md:gap-4">
        <div className="grid gap-4">
            <div>
                <DetailedImage src="/images/work/hose_cramping_machine.jpg" text='Hose Cramping Machine' />
                {/* <img className="h-auto max-w-full rounded-lg" src="/images/work/hose_cramping_machine.jpg" alt=""/> */}
            </div>
            <div>
            <DetailedImage src="/images/work/lathe_machine.jpg" text='Lathe Machine' />
                {/* <img className="h-auto max-w-full rounded-lg" src="/images/work/lathe_machine.jpg" alt=""/> */}
            </div>
            <div>
                {/* <img className="h-auto max-w-full rounded-lg" src="/images/work/gear_box_1.jpg" alt=""/> */}
                <DetailedImage src="/images/work/gear_box_1.jpg" text='Gear Box Repair 1' />
            </div>
        </div>
        <div className="grid gap-4">
            <div>
                {/* <img className="h-auto max-w-full rounded-lg" src="/images/work/gear_box_2.jpg" alt=""/> */}
                <DetailedImage src="/images/work/gear_box_2.jpg" text='Gear Box Repair 2' />
            </div>
            <div>
                {/* <img className="h-auto max-w-full rounded-lg" src="/images/work/accumulator_changing.jpg" alt=""/> */}
                <DetailedImage src="images/work/accumulator_changing.jpg" text='Changing Accumulator' />
            </div>
            <div>
                {/* <img className="h-auto max-w-full rounded-lg" src="/images/work/steering_system.jpg" alt=""/> */}
                <DetailedImage src="images/work/steering_system.jpg" text='Steering System' />
            </div>
        </div>
        <div className="grid gap-4">
            <div>
                {/* <img className="h-auto max-w-full rounded-lg" src="/images/work/site_work_6.png" alt=""/> */}
                <DetailedImage src="/images/work/site_work_6.png" text='Pump' />
            </div>
            <div>
                {/* <img className="h-auto max-w-full rounded-lg" src="/images/work/site_work_7.png" alt=""/> */}
                <DetailedImage src="images/work/site_work_7.png" text='Changing Accumulator' />
            </div>
            <div>
                {/* <img className="h-auto max-w-full rounded-lg" src="/images/work/stabilizer_system.jpg" alt=""/> */}
                <DetailedImage src="images/work/stabilizer_system.jpg" text='Stabilizer System' />
            </div>
        </div>
        {/* <div className="grid gap-4">
            <div>
                <img className="h-auto max-w-full rounded-lg" src="/images/work/hose_cramping_machine.jpg" alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="/images/work/hose_cramping_machine.jpg" alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="/images/work/hose_cramping_machine.jpg" alt=""/>
            </div>
        </div> */}
    </div>

  )
}
