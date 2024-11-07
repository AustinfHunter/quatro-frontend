import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import { useState, useEffect } from "react";

const MessageBubble = ({ text, sender }) => (
  <Box
    sx={{
      maxWidth: "70%",
      padding: "0.8rem",
      margin: "0.5rem 0",
      borderRadius: "1rem",
      bgcolor: sender === "user" ? "primary.main" : "grey.300",
      color: sender === "user" ? "white" : "black",
      alignSelf: sender === "user" ? "flex-end" : "flex-start",
    }}
  >
    <Typography variant="body1">{text}</Typography>
  </Box>
);

const Chatbot = ({ initialMessages = [], loading }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = () => {
    if (input.trim() === "") return;
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsSending(true);

    setTimeout(() => {
      const botResponse = {
        text: "Hello! How can I help you today?",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
      setIsSending(false);
    }, 1000);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      margin="auto"
      sx={{ borderRadius: "8px" }}
      height={"80vh"}
      width={"40%"}
      component={Paper}
      elevation={3}
      padding={"1rem"}
    >
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        p={12}
        sx={{
          overflowY: "auto",
        }}
      >
        {messages.map((msg, index) => (
          <MessageBubble key={index} text={msg.text} sender={msg.sender} />
        ))}
        {loading && (
          <Box display="flex" justifyContent="center" p={2}>
            <CircularProgress />
          </Box>
        )}
      </Box>

      <Box display="flex" alignItems="center" width="100%" p={2} gap={1}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <IconButton
          color="primary"
          onClick={handleSendMessage}
          disabled={isSending}
        >
          <Send />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Chatbot;
