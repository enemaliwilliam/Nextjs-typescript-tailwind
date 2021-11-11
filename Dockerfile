FROM node:12
# Set port in env
ENV PORT 3000
# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /app
# Installing dependencies
COPY package*.json ./
RUN npm install
# Copying source files
COPY . .
# Expose Port 3000
EXPOSE 3000 
# Running the app
CMD [ "npm", "run" ,"dev" ]