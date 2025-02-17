
import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Twitter, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Editor = () => {
  const [threadContent, setThreadContent] = useState('');
  const { toast } = useToast();
  
  const getTweetPreviews = (content: string) => {
    const words = content.split(' ');
    const tweets: string[] = [];
    let currentTweet = '';
    
    words.forEach((word) => {
      const testTweet = currentTweet ? `${currentTweet} ${word}` : word;
      // Account for "🧵 1/X" format in character count
      const threadSuffix = ` 🧵 ${tweets.length + 1}/X`;
      
      if ((testTweet + threadSuffix).length <= 280) {
        currentTweet = testTweet;
      } else {
        tweets.push(currentTweet + ` 🧵 ${tweets.length + 1}/${Math.ceil((content.length / 280) + 1)}`);
        currentTweet = word;
      }
    });
    
    if (currentTweet) {
      tweets.push(currentTweet + ` 🧵 ${tweets.length + 1}/${tweets.length + 1}`);
    }
    
    return tweets;
  };

  const handleTwitterPost = async () => {
    const tweets = getTweetPreviews(threadContent);
    const tweetText = encodeURIComponent(tweets[0]); // First tweet of the thread
    
    // Open Twitter's web intent in a new window
    window.open(
      `https://twitter.com/intent/tweet?text=${tweetText}`,
      '_blank'
    );
    
    toast({
      title: "Ready to Tweet! 🐦",
      description: "We've opened Twitter for you to post your thread.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/50 to-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Editor Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold gradient-text">Write your thread</h2>
              <Button
                onClick={handleTwitterPost}
                className="hover-lift bg-[#1DA1F2] hover:bg-[#1a8cd8] transition-all duration-300"
                disabled={!threadContent.trim()}
              >
                <Twitter className="mr-2 h-4 w-4" />
                Post to Twitter
              </Button>
            </div>
            <Textarea 
              placeholder="Start writing your thread here... We'll automatically split it into tweet-sized chunks! ✨"
              className="min-h-[400px] resize-none p-4 text-lg transition-all duration-300 border-purple-100 focus:border-purple-300 rounded-xl shadow-sm"
              value={threadContent}
              onChange={(e) => setThreadContent(e.target.value)}
            />
          </div>

          {/* Preview Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold gradient-text">Thread Preview</h2>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {getTweetPreviews(threadContent).map((tweet, index) => (
                <div 
                  key={index}
                  className="p-6 border border-purple-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-purple-600 font-medium">Tweet {index + 1}</p>
                    <span className="text-gray-400 text-sm">
                      {tweet.length}/280 characters
                    </span>
                  </div>
                  <p className="text-gray-800 text-lg leading-relaxed">{tweet}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click "Post to Twitter" to share
                    </p>
                    <Send className="h-4 w-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
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
