import {
  Box,
  CircularProgress,
  TextField,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { queryBot } from "../services/botService";
import styles from "../css/chatBotMessage.module.css";

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
    {sender === "user" ? (
      <Typography variant="body1">{text}</Typography>
    ) : (
      <div className={styles.message}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    )}
  </Box>
);

const Chatbot = ({ initialMessages = [], loading }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = () => {
    if (input.trim() === "" || isSending) return;
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsSending(true);

    queryBot(input).then((res) => {
      const botResponse = {
        text: res.data.response,
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
      setIsSending(false);
    });
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
      width={"80%"}
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
        {loading ||
          (isSending && (
            <Box display="flex" justifyContent="center" p={2}>
              <CircularProgress />
            </Box>
          ))}
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
