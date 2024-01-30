import React, { useState } from "react";
import "./SideBar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const SideBar = () => {
  const [more, setMore] = useState(4);

  const mainArr = [
    "Lifestyle",
    "Jordan",
    "Basketball",
    "Training & Gym",
    "Football",
    "Skateboarding",
    "Golf",
    "Nike By You",
    "Boots",
    "Tennis",
    "Athletics",
    "Sandals, Slides & Flip Flops",
  ];

  const genderArr = ["Men", "Women", "Unisex"];
  const sizeArr = [
    1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10,
    10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17,
  ];

  const priceArr = [
    "$0 - $25",
    "$25 - $50",
    "$50 - $100",
    "$100 - $150",
    "Over $150",
  ];

  const colorArr = [
    {
      colors: "black",
      text: "Black",
    },
    {
      colors: "blue",
      text: "Blue",
    },
    {
      colors: "brown",
      text: "Brown",
    },
    {
      colors: "green",
      text: "Green",
    },
    {
      colors: "grey",
      text: "Grey",
    },
    {
      colors: "black",
      text: "Multi-Color",
    },
    {
      colors: "orange",
      text: "Orange",
    },
    {
      colors: "pink",
      text: "Pink",
    },
    {
      colors: "purple",
      text: "Purple",
    },
    {
      colors: "red",
      text: "Red",
    },
    {
      colors: "white",
      text: "White",
      border: "0.5px solid gray",
    },
    {
      colors: "yellow",
      text: "Yellow",
    },
  ];

  const productArr = [
    "40% Off and Up",
    "30% Off and Up",
    "20% Off and Up",
    "ACG",
  ];

  const athletesArr = [
    "Giannis Antetokounmpo",
    "Sabrina Ionescu",
    "Rafael Nadal",
    "Grant Taylor",
    "Kylian Mbappe",
  ];

  const collabArr = ["Nike x MMW"];

  const iconArr = [
    "Nike Dunk",
    "Air Force 1",
    "Air Max",
    "Blazer Cortez",
    "Huarache",
    "Mercurial",
    "Metcon",
    "Pegasus",
    "Phantom",
    "Roshe",
    "Tiempo",
    "Zoom Rival",
    "Alphafly",
  ];

  const shoesArr = ["Platforms"];

  const air_maxArr = ["Air Max 1", "VaporMax"];

  const heigthArr = ["Low Top", "Mid Top", "High Top"];

  const technologyArr = [
    "All Conditions Control",
    "Nike Flyknit",
    "GORE-TEX",
    "Nike Lunarlon",
    "Nike Max Air",
    "Nike Air",
    "Nike React",
    "Nike Zoom Air",
    "Nike ZoomX",
  ];

  const widthArr = ["Regular"];

  const surfaceArr = [
    "Artificial Grass",
    "Firm Ground",
    "Grass",
    "Hard Court",
    "Indoor Court",
    "Road",
    "Track",
    "Trail",
    "Turf",
  ];

  const bestArr = ["Dry Weather Conditions", "Wet Weather Conditions"];

  const materialArr = [
    "Canvas",
    "Leather",
    "Synthetics",
    "Sustainable Materials",
  ];

  const featuresArr = ["Spikeless", "Waterproof"];

  const benefitsArr = ["Easy On & Off"];
  return (
    <Box id="side_bar">
      <Box className="side_bar">
        <Box sx={{ padding: "20px 0 40px 0" }}>
          <List>
            {mainArr.map((i, index) => (
              <ListItem sx={{ p: "10px 0" }} key={index}>
                {i}
              </ListItem>
            ))}
          </List>
        </Box>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "50%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Gender
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {genderArr.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                {i}
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "50%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Size
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {sizeArr.map((i, index) => (
              <Button
                sx={{
                  fontSize: "16px",
                  border: "1.5px solid #CACACB",
                  color: "#000",
                  fontWeight: "bold",
                }}
                key={index}
              >
                {i}
              </Button>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "50%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Shop by Price
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {priceArr.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                {i}
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "90%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Product Discounts
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {productArr.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                {i}
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "50%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Color
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              // width: "300px",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {colorArr.map((i, index) => (
              <Box
                sx={{
                  width: "60px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    background: `${i.colors}`,
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: `${i.border}`,
                  }}
                ></Box>
                <Typography sx={{ fontSize: "13px" }}>{i.text}</Typography>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "90%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Athletes
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {athletesArr.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                {i}
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "90%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Collaborator
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {collabArr.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                {i}
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "90%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Icon
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {iconArr.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                {i}
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "90%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Shoes
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {shoesArr.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                {i}
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "90%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Air Max
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {air_maxArr.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                {i}
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "90%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Shoe Heigth
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {heigthArr.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                {i}
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "90%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Technology
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {technologyArr.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                {i}
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "90%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Width
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {widthArr.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                {i}
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "90%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Surface
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {surfaceArr.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                {i}
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "90%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Best For
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {bestArr.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                {i}
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "90%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Material
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {materialArr.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                {i}
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "90%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Features
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {featuresArr.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  fontSize: "16px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                {i}
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            border: "none",
            p: 0,
            boxShadow: "none",
            borderTop: "1px solid rgb(192, 192, 192)",
            paddingBottom: "35px",
          }}
        >
          <AccordionSummary
            sx={{ padding: 0 }}
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "90%",
                flexShrink: 0,
                color: "#0b1f3f",
                fontWeight: "bold",
                padding: "3px 0",
              }}
            >
              Benefits
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: 0,
            }}
          >
            {benefitsArr.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  fontSize: "17px",
                  p: 0,
                  m: 0,
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0, m: "0 5px 0 0" }} />
                {i}
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default SideBar;
