
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Send } from "lucide-react";

export const MessageSection = () => {
  const [message, setMessage] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      setShowThankYou(true);
      setMessage('');
      setTimeout(() => setShowThankYou(false), 3000);
    }
  };

  return (
    <section id="message" className="py-20 bg-bangaram-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-bangaram-black mb-6">
              Leave a Message
            </h2>
            <p className="font-inter text-xl text-bangaram-soft-black/80">
              Share your thoughts, wishes, or simply say hello to Bangaram
            </p>
          </div>

          <Card className="bg-bangaram-white/80 border-bangaram-lavender/30">
            <CardContent className="p-8">
              {showThankYou ? (
                <div className="text-center py-8">
                  <Heart className="w-16 h-16 text-bangaram-lavender-dark mx-auto mb-4 animate-pulse" />
                  <h3 className="font-playfair text-2xl font-semibold text-bangaram-black mb-2">
                    Thank You!
                  </h3>
                  <p className="font-inter text-bangaram-soft-black/80">
                    Your message has been sent with love ❤️
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block font-inter text-bangaram-black mb-2">
                      Your Message for Bangaram
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-4 border border-bangaram-lavender/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bangaram-lavender bg-bangaram-white/50 font-inter"
                      rows={6}
                      placeholder="Write something beautiful for Bangaram..."
                    />
                  </div>
                  
                  <Button
                    onClick={handleSendMessage}
                    className="w-full bangaram-button text-lg py-4"
                    disabled={!message.trim()}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send with Love
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="font-inter text-bangaram-soft-black/60 italic">
              "Every message sent here is a token of love and appreciation for the wonderful person you are, Bangaram."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
