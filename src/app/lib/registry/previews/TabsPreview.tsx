"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/kui/Tabs";
import { Card, CardHeader, CardTitle, CardDescription } from "@/kui/Card";
import { User, Settings, Bell } from "lucide-react";

export const TabsPreview = () => {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex flex-col items-center gap-2 w-full">
        <p className="text-gray-600 text-xs tracking-widest uppercase">
          Default
        </p>
        <Tabs defaultValue="overview" className="w-full">
          {" "}
          <TabsList className="w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>
                  This is the overview tab content.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle>Details</CardTitle>
                <CardDescription>
                  This is the details tab content.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>
                  This is the settings tab content.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <p className="text-gray-600 text-xs tracking-widest uppercase">
          With Icons
        </p>
        <Tabs defaultValue="profile" className="w-full">
          {" "}
          <TabsList variant="outline" className="w-full">
            <TabsTrigger value="profile" icon={<User size={13} />}>
              Profile
            </TabsTrigger>
            <TabsTrigger value="settings" icon={<Settings size={13} />}>
              Settings
            </TabsTrigger>
            <TabsTrigger value="notifs" icon={<Bell size={13} />}>
              Notifications
            </TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                  Manage your profile settings here.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>
                  Configure your preferences here.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="notifs">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Manage your notification preferences.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <p className="text-gray-600 text-xs tracking-widest uppercase">
          Ghost + Disabled
        </p>
        <Tabs defaultValue="tab1" className="w-full">
          {" "}
          <TabsList variant="ghost" className="w-full">
            <TabsTrigger value="tab1">Tab One</TabsTrigger>
            <TabsTrigger value="tab2">Tab Two</TabsTrigger>
            <TabsTrigger value="tab3" disabled>
              Disabled
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <Card>
              <CardHeader>
                <CardTitle>Tab One</CardTitle>
                <CardDescription>Content for tab one.</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="tab2">
            <Card>
              <CardHeader>
                <CardTitle>Tab Two</CardTitle>
                <CardDescription>Content for tab two.</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
