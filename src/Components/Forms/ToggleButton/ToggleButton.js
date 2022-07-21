import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';


function ToggleButton({userData,setUserData}) {
    const [enabled, setEnabled] = useState(false)
    
    useEffect(() => {
        if (enabled) {
            setUserData({...userData,'featured':enabled});
        } else {
            setUserData({...userData,'featured':enabled});
        }
    }, [enabled]);



  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Featured</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white`}
      />
    </Switch>
  )
}

export default ToggleButton;