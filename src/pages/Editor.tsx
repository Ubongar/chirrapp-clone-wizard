
import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";

const Editor = () => {
  const [threadContent, setThreadContent] = useState('');

  const getTweetPreviews = (content: string) => {
    // Split content into tweets (roughly 280 characters each)
    return content.match(/.{1,280}(?:\s|$)/g) || [];
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Editor Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold gradient-text">Write your thread</h2>
            <Textarea 
              placeholder="Start writing your thread here..."
              className="min-h-[400px] resize-none p-4"
              value={threadContent}
              onChange={(e) => setThreadContent(e.target.value)}
            />
          </div>

          {/* Preview Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold gradient-text">Thread Preview</h2>
            <div className="space-y-4">
              {getTweetPreviews(threadContent).map((tweet, index) => (
                <div 
                  key={index}
                  className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm"
                >
                  <p className="text-gray-600 text-sm mb-2">Tweet {index + 1}</p>
                  <p className="text-gray-800">{tweet}</p>
                  <p className="text-gray-400 text-sm mt-2">
                    {tweet.length}/280 characters
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
