import { Button } from "../../_components/ui/Button";
import { Input } from "../../_components/ui/Input";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Settings</h1>
      </div>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Profile</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="notifications" className="h-4 w-4 rounded border-gray-300" />
              <label htmlFor="notifications" className="text-sm font-medium">
                Enable email notifications
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="updates" className="h-4 w-4 rounded border-gray-300" />
              <label htmlFor="updates" className="text-sm font-medium">
                Receive product updates
              </label>
            </div>
          </div>
        </div>
        
        <Button>Save Changes</Button>
      </div>
    </div>
  );
} 